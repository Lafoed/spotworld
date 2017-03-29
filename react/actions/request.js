import * as reqst from'../../services/lib/Req'

export function api( name, options ) {

    return (dispatch) => {
        dispatch({
            type: "API_WAIT",
            payload: name
        });
        reqst.api( "api/"+name, options )
            .then(({data})=>{
                dispatch({
                    type: "API_OK",
                    payload: data,
                    name:name
                });
            })
            .catch(err=>{
                dispatch({
                    type: "API_ERR",
                    payload: err,
                    name:name
                })
            })
    }
}

