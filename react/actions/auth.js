

export function loginFB() {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_FB_WAIT",
        })
        FB.login(resp=>{
            let user = new Parse.User();
            var data = new Date(resp.authResponse.expiresIn * 1000 + (new Date()).getTime()).toJSON();
            user._linkWith( 'facebook', {authData:{
                "id":resp.authResponse.userID,
                "access_token":resp.authResponse.accessToken,
                "expiration_date":data,
                signedRequest:resp.authResponse.signedRequest,
            }} ).then((user)=>{
                    dispatch({
                        type: "LOGIN_FB_OK",
                        payload: user,
                    })
                }, err=>{
                    dispatch({
                        type: "LOGIN_FB_ERR",
                        payload: err,
                    })
            });
        })
    }
}

export function loginVK() {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_VK_WAIT",
        })
        VK.Auth.login((resp)=>{
            let user = new Parse.User();
            var dt = new Date("30 July 2017 15:05 UTC");
            user._linkWith( 'vkontakte', {authData:{
                "id":resp.session.mid,
                "access_token":resp.session.sig,
                "expiration_date":data
            }} ).then((user)=>{
                dispatch({
                    type: "LOGIN_VK_OK",
                    payload: user,
                })
            }, err=>{
                dispatch({
                    type: "LOGIN_VK_ERR",
                    payload: err,
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







