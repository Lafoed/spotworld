import * as reqst from'../../services/lib/Req'

export function api( url ) {

    return (dispatch) => {
        dispatch({
            type: "API_WAIT",
            payload: url
        });
        reqst.api( url )
            .then(({data})=>{
                dispatch({
                    type: "API_OK",
                    payload: data
                });
            })
            .catch(err=>{
                dispatch({
                    type: "API_ERR",
                    payload: err
                })
            })
    }
}
