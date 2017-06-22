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