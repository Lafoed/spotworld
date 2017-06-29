

export function loginFB() {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_FB_WAIT",
        })
        FB.login(resp=>{
            console.log(resp);
            dispatch({
                type: "LOGIN_FB_ERR",
                payload: resp,
            })
        })
    }
}

export function loginVK() {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_VK_WAIT",
        })
        console.log("PARSE LINK SHIT")
        VK.Auth.login((authData)=>{
            let user = new Parse.User();
            let fakeAuthData = {
                "twitter": {
                    "id": "user's Twitter id number as a string",
                    "screen_name": "user's Twitter screen name",
                    "consumer_key": "your application's consumer key",
                    "consumer_secret": "your application's consumer secret",
                    "auth_token": "an authorized Twitter token for the user with your application",
                    "auth_token_secret": "the secret associated with the auth_token"
                }
            }
            user._linkWith('twitter', fakeAuthData).then(function(user){
                debugger;
                dispatch({
                    type: "LOGIN_VK_OK",
                    payload: user,
                })
            }, err=>{
                debugger;
                dispatch({
                    type: "LOGIN_VK_ERR",
                    payload: user,
                })
            });

        })

    }
}

export function checkAuth() {
    var currentUser = Parse.User.current();
        return ( dispatch ) => {
            dispatch( {
                type:currentUser?"AUTH_CHECK_SUCCESS":"AUTH_CHECK_FAIL",
                payload:currentUser?currentUser:null
            } )
        }

}

export function login({username, password}){
    return (dispatch) => {
        dispatch({
            type:"LOGIN_WAIT"
        })
        Parse.User.logIn(username, password, {
            success: user=>dispatch({
                type:"LOGIN_OK",
                payload: user
            }),
            error: (user, error)=>dispatch({
                type:"LOGIN_ERR",
                payload: { error:error, user:user }
            })

        });
    }
}








