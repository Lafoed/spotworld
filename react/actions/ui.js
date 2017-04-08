import { userGeolocation } from '../../services/lib/tools'

export function getUserLocation() {

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

export function openPopup(data) {

    return (dispatch) => {
        dispatch({
            type: "POPUP_OPEN",
            payload:data
        });
    }
}

export function closePopup(data) {

    return (dispatch) => {
        dispatch({
            type: "POPUP_CLOSE",
            payload:data
        });
    }
}
