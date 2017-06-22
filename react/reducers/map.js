const initialState = {
    center: { longitude:50, latitude:30 },
    zoom: 11
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            return { ...state, center: {latitude:action.payload.coords.latitude, longitude:action.payload.coords.longitude- 0.15} }

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state};
    }
}



