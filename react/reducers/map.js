const initialState = {
    center: { longitude:50, latitude:30 },
    zoom: 11,
    editEvent:null,
    userLocation:null
};


var Event = Parse.Object.extend("Event");

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "LOCATION_WAIT":
            return {...state}

        case "LOCATION_OK":
            var userLocation =  {latitude:action.payload.coords.latitude, longitude:action.payload.coords.longitude};
            return { ...state, center: {latitude:action.payload.coords.latitude, longitude:action.payload.coords.longitude- 0.15}, userLocation:userLocation }

        case "LOCATION_ERR":
            console.error(action.payload);
            return {...state}



        case "EDIT_EVENT":
            var newFields = action.payload
            if ( newFields === null ){
                return { ...state, editEvent:null }
            } else {
                var newEvent = { ...state.editEvent, ...newFields }
                console.log(newEvent);
                return { ...state, editEvent:newEvent }
            }



        case "SET_MAP_VIEW":
            var diff = _.difference(Object.keys(action.payload), Object.keys(state));
            if (diff.length){
                console.error('no such map props', diff)
                return { ...state }
            } else {
                return { ...state, ...action.payload }
            }





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



