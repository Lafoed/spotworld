const initialState = {
    userLocation: [0,0],
    pixel:[0,0],
    popupId:null,
    markerMode:false,
    constructorOpen:false,
    popupOpen:false,
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            var coords = [action.location.coords.longitude,action.location.coords.latitude]
            return {...state, userLocation:coords}

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}


        case "SET_UI_STATE":
            if ( !state.hasOwnProperty(action.field) ) throw `no such state ${action.field}`
            else return {...state, [action.field]:action.payload}


        case "TOGGLE_UI_STATE":
            if ( !state.hasOwnProperty(action.field) ) throw `no such state ${action.field}`
            else return {...state, [action.field]:!state[action.field]}


        default:
            return state
    }
}



