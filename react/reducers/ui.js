const initialState = {
    userLocation: [30,50]
};

export default function getUserLocation(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            var {payload} = action;
            return {...state}

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}

        default:
            return state
    }
}


