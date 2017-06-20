import axios from 'axios'

export function get( name, options ) {
    return (dispatch) => {
        dispatch({
            type: "GET_WAIT",
            payload: name
        });
        axios( "api/"+name, options )
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


