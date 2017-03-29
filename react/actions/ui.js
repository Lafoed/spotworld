import { userGeolocation } from '../../services/lib/tools'

export function getUserLocation() {

    return (dispatch) => {
        dispatch({
            type: "LOCATION_WAIT",
            payload: name
        });
        userGeolocation()
            .then(data=>{
                dispatch({
                    type: "LOCATION_OK",
                    payload: data
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
