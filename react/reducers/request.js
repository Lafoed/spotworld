import {events, user} from './data'


const initialState = {
    user: user,
    events: events
};

export default function request(state = initialState, action) {
    switch (action.type) {

        case "GET_WAIT":
            return {...state}

        case "GET_OK":
            var {payload, name} = action;
            return {...state, [name]:payload}

        case "GET_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state}
    }
}



