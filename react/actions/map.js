
export function click( url ) {

    return (dispatch) => {
        dispatch({
            type: "MAP_ClICK",
            payload: url
        });
    }
}
