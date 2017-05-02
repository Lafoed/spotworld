const initialState = {
    user: null,
    markers: []
};

export default function request(state = initialState, action) {
    switch (action.type) {

        case "GET_WAIT":
            return {...state}

        case "GET_OK":
            var {payload, name} = action;
            return {...state, [name]:payload}

        case "GET_ERR":
            console.error(action.payload);
            return {...state}


        case "SAVE_EVENT_WAIT":
            return {...state}

        case "SAVE_EVENT_OK":
            state.markers.push(action.payload);
            return {...state}

        case "SAVE_EVENT_ERR":
            console.error(action.payload);
            return {...state}

        default:
            return state
    }
}

