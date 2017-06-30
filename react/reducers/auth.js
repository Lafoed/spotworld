const initialState = {
    user:null
};





export default function ui(state = initialState, action) {
    switch (action.type) {

        case "AUTH_CHECK_SUCCESS":
            return {...state, user:action.payload }

        case "AUTH_CHECK_FAIL":
            return {...state }



        case "LOGIN_VK_WAIT":
            return {...state }

        case "LOGIN_VK_OK":
            console.log(action.payload);
            return { ...state }

        case "LOGIN_VK_ERR":
            console.error(action.payload);
            return {...state }



        case "LOGIN_FB_WAIT":
            return {...state }

        case "LOGIN_FB_OK":
            console.log(action.payload);
            return { ...state }

        case "LOGIN_FB_ERR":
            console.error(action.payload);
            return {...state }



        case "LOGIN_WAIT":
            return {...state }

        case "LOGIN_OK":
            return { ...state, user:action.payload }

        case "LOGIN_ERR":
            console.error(action.payload);
            return {...state }

        default:
            return {...state };
    }
}



