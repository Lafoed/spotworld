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

export function openPopup(data, pixel) {

    return (dispatch) => {
        dispatch({
            type: "POPUP_SHOW",
            payload:data,
            pixel:pixel
        });
    }
}
