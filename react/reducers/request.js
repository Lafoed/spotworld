const initialState = {
    data: [],
};

export default function request(state = initialState, action) {
    switch (action.type) {

        case "REQUEST_SEND":
            return Object.assign({}, state,  {wait:true}, {hasMore:false} );

        default:
            return state;
    }
}

