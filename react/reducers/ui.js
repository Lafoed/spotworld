const initialState = {
    userLocation: [0,0]
};

export default function getUserLocation(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":we
            return {...state, userLocation:[action.location.coords.longitude,action.location.coords.latitude]}

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}

        default:
            return state
    }
}


