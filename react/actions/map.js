export function setUserLocation() {
    return (dispatch) => {
        dispatch({
            type: "LOCATION_WAIT"
        });
        userGeolocation()
            .then(location=>{
                dispatch({
                    type: "LOCATION_OK",
                    location: location
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

export function createMap() {
    return (dispatch) => {
        dispatch({
            type: "CREATE_MAP",
        });
    }
}

export function addMarkers(data) {
    return (dispatch) => {
        dispatch({
            type: "ADD_MARKERS",
            payload:data
        });
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