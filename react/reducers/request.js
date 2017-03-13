const initialState = {
    data: [],
};

export default function request(state = initialState, action) {
    switch (action.type) {

        case "REQUEST_SEND":
            return state;

        default:
            return state;
    }
}

