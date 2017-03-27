const initialState = {
    api: [],
};

export default function api(state = initialState, action) {
    switch (action.type) {

        case "API_WAIT":
            return Object.assign({}, state);

        case "API_OK":
            //do smth with action.payload, then return to state
            return Object.assign({}, state);

        case "API_ERR":
            return Object.assign({}, state);

        default:
            return state
    }
}
