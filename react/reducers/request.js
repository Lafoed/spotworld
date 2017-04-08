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


        case "SAVE_MARKER_WAIT":
            return {...state}

        case "SAVE_MARKER_OK":
            var {marker} = action;
            state.markers.push(marker);
            return {...state}

        case "SAVE_MARKER_ERR":
            console.error(action.payload);
            return {...state}

        default:
            return state
    }
}

