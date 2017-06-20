export function toggleView(field) {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_VIEW",
            payload: field
        });
    }
}

