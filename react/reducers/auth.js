const initialState = {
    user:null,
    authWait:false
};





export default function ui(state = initialState, action) {
    switch (action.type) {

        case "AUTH_CHECK_SUCCESS":
            return {...state, user:action.payload }

        case "AUTH_CHECK_FAIL":
            return {...state }



        case "LOGIN_VK_WAIT":
            return {...state, authWait:true }

        case "LOGIN_VK_OK":
            return { ...state, user:action.payload, authWait:false }

        case "LOGIN_VK_ERR":
            console.error(action.payload );
            return {...state, authWait:false}



        case "LOGIN_FB_WAIT":
            return {...state, authWait:true }

        case "LOGIN_FB_OK":
            return { ...state, user:action.payload, authWait:false }

        case "LOGIN_FB_ERR":
            console.error(action.payload, );
            return {...state, authWait:false }



        case "LOGIN_WAIT":
            return {...state, authWait:true }

        case "LOGIN_OK":
            return { ...state, user:action.payload, authWait:false }

        case "LOGIN_ERR":
            console.error(action.payload);
            return {...state, authWait:false }

        default:
            return {...state };
    }
}



