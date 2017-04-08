import * as reqst from'../../services/lib/Req'

export function get( name, options ) {
    return (dispatch) => {
        dispatch({
            type: "GET_WAIT",
            payload: name
        });
        reqst.api( "api/"+name, options )
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

export function saveMarker( marker ) {
    return (dispatch) => {
        dispatch({
            type: "SAVE_MARKER_WAIT",
            payload: marker
        });
        reqst.api( "api/markers", {method:"post",data:marker} )
            .then(({data})=>{
                dispatch({
                    type: "SAVE_MARKER_OK",
                    marker: marker
                });
            })
            .catch(err=>{
                dispatch({
                    type: "SAVE_MARKER_ERR",
                    payload: err
                })
            })
    }
}

