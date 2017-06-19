const initialState = {
    pixel:[0,0],
    popupId:null,
    markerMode:false,
    constructorOpen:false,
    popupOpen:false,
    coordsClick:null,
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "SET_UI_STATE":
            if ( !state.hasOwnProperty(action.field) ) throw `no such state ${action.field}`
            else return {...state, [action.field]:action.payload}


        case "TOGGLE_UI_STATE":
            if ( !state.hasOwnProperty(action.field) ) throw `no such state ${action.field}`
            else return {...state, [action.field]:!state[action.field]}

        case "OPEN_EVENT":
            return {...state, popupOpen:action.payload.id}


        default:
            return {...state}
    }
}



