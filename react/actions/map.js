

export function getUserCoords() {
    return (dispatch) => {
        dispatch({
            type: "LOCATION_WAIT"
        });
        userGeolocation()
            .then(location=>{
                dispatch({
                    type: "LOCATION_OK",
                    payload: location
                });
            })
            .catch(err=>{
                dispatch({
                    type: "LOCATION_ERR",
                    payload: err
                })
            })
    }
}



function userGeolocation(){
    return new Promise((resolve,reject)=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(resolve);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    })
}


export function editEvent(data){
    return (dispatch) => {
        dispatch({
            type: "EDIT_EVENT",
            payload:data
        });
    }
}

export function saveEvent(event){
    return (dispatch) => {
        dispatch({
            type: "SAVE_EVENT_WAIT"
        });
        debugger;
        event.save().then(resp=>{
                dispatch({
                    type: "SAVE_EVENT_OK",
                    payload: resp
                });
            })
            .catch(err=>{
                dispatch({
                    type: "SAVE_EVENT_ERR",
                    payload: err
                })
            })
    }
}