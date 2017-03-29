const initialState = {
    user: null,
    markers: []
};

export default function api(state = initialState, action) {
    switch (action.type) {

        case "API_WAIT":
            return {...state}

        case "API_OK":
            var {payload, name} = action;
            return {...state, [name]:payload}

        case "API_ERR":
            console.error(action.payload);
            return {...state}

        default:
            return state
    }
}

