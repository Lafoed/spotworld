// import {events, user} from './data'


const initialState = {
    user: null,
    events: [],
    isNeedUpdate:false
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
            return {...state, events:events.map(event=>event)}

        case "GET_ALL_EVENTS_ERR":
            console.error(action.payload);
            return {...state}



        case "CHECK_SERVER_DATA_WAIT":
            return {...state}

        case "CHECK_SERVER_DATA_OK":
            var count = action.payload;
            return {...state, isNeedUpdate:state.events.length !== count}

        case "CHECK_SERVER_DATA_ERR":
            console.error(action.payload);
            return {...state}


        default:
            return {...state}
    }
}



