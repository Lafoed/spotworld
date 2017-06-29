

export function loginWithFB() {
    return (dispatch) => {
        dispatch({
            type: "LOGIN_FB_WAIT",
        })
        debugger;
        FB.getLoginStatus(response=>{
            console.log(response);
            switch (response){
                case "connected":
                    FB.login(resp=>{
                        debugger;
                        dispatch({
                            type: "LOGIN_FB_OK",
                            payload: response,
                        })
                    });
                    break;
                case "not_authorized":
                    break;
                case "unknown":
                    break;
                default :
                    dispatch({
                        type: "LOGIN_FB_ERR",
                        payload: response,
                    })
            }
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

export function logIn(username, password){
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



// window.fbAsyncInit = function() {
//     debugger;
//     FB.init({
//         appId      : '198503764011682',
//         cookie     : true,
//         xfbml      : true,
//         version    : 'v2.8'
//     });
//     FB.AppEvents.logPageView();
// };







