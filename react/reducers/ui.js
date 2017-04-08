const initialState = {
    userLocation: [0,0],
    popup:null,
    pixel:[0,0]
};

export default function uiAction(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            var coords = [action.location.coords.longitude,action.location.coords.latitude]
            return {...state, userLocation:coords}

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}


        case "POPUP_OPEN":
            return {...state, popup:action.payload}

        case "POPUP_CLOSE":
            return {...state, popup:null}

        default:
            return state
    }
}



