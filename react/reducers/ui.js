const initialState = {
    chosenPopupId:null
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "UI_INPUT":
            return {...state, ...action.payload }

        default:
            return {...state}
    }
}



