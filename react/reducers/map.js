const initialState = {
    center: { longitude:50, latitude:30 },
    zoom: 11,
    editEvent:null,
};


var Event = Parse.Object.extend("Event");

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            return { ...state, center: {latitude:action.payload.coords.latitude, longitude:action.payload.coords.longitude- 0.15} }

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}



        case "EDIT_EVENT":
            var newFields = action.payload;
            var event = state.editEvent ? state.editEvent : new Event(newFields);
            //TODO update event

            return { ...state, editEvent:event}



        case "SAVE_EVENT_WAIT":
            return {...state}

        case "SAVE_EVENT_OK":
            return { ...state, editEvent:null }

        case "SAVE_EVENT_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state};
    }
}



