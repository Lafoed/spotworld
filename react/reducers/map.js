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
            var event = state.editEvent ? state.editEvent : new Event(action.payload);
            debugger;
            action.payload;
            var point = new Parse.GeoPoint({latitude: coords.lat, longitude: coords.lng});
            var event = new Event({
                relatedUser:Parse.User.current(),
                coords:point,
                description:"create marker is work!",
                startTime:new Date(),
                endTime:new Date(),
                tags:['create','first'],
                img:"http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg",
                title:"created marker"
            });
            return { ...state, editEvent:action.payload}



        case "SAVE_MARKER_WAIT":
            return {...state}

        case "SAVE_MARKER_OK":
            return { ...state, editEvent:null }

        case "SAVE_MARKER_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state};
    }
}



