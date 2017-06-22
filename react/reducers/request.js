// import {events, user} from './data'


const initialState = {
    user: null,
    events: []
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

        case "GET_ALL_EVENTS_WAIT":
            return {...state}

        case "GET_ALL_EVENTS_OK":
            var events = action.payload;
            return {...state, events:events.map(event=>event.toJSON())}

        case "GET_ALL_EVENTS_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state}
    }
}



