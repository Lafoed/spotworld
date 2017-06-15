const initialState = {
    menu:false,
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "TOGGLE_VIEW":
                if ( !state.hasOwnProperty(action.payload) ) return console.error(`no such field ${action.payload} `)
                return {...state, [action.payload]:!state[action.payload]}

        default:
            return {...state};
    }
}



