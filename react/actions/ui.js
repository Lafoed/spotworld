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

export function setUiState(field, data) {
    return (dispatch) => {
        dispatch({
            type: "SET_UI_STATE",
            payload:data,
            field:field
        });
    }
}


export function toggleState(field) {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_UI_STATE",
            field: field
        });
    }
}
