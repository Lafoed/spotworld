

var Event = new Parse.Query('Event');

export function getAllEvents() {
    return (dispatch) => {
        dispatch({
            type: "GET_ALL_EVENTS_WAIT",
        })
        Event.find(
            events=>dispatch({
                type: "GET_ALL_EVENTS_OK",
                payload: events,
            }),
            err=>dispatch({
                type: "GET_ALL_EVENTS_ERR",
                payload: err,
            })
        )

    }
}

export function get() {
    return (dispatch) => {
        dispatch({
            type: "GET_WAIT",
            payload: name
        });
        axios( "api/"+name, options )
            .then(({data})=>{
                dispatch({
                    type: "GET_OK",
                    payload: data,
                    name:name
                });
            })
            .catch(err=>{
                dispatch({
                    type: "GET_ERR",
                    payload: err,
                    name:name
                })
            })
    }
}




