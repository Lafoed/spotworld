const initialState = {
    chosenPopupId:null,
    sort:'distance'
};

export default function ui(state = initialState, action) {
    switch (action.type) {

        case "UI_INPUT":
            var diff = _.difference(Object.keys(action.payload), Object.keys(state));
            if (diff.length){
                console.error('no such ui props', diff)
                return { ...state }
            } else {
                return { ...state, ...action.payload }
            }

        default:
            return {...state}
    }
}



