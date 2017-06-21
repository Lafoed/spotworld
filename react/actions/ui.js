export function toggleView(field) {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_VIEW",
            payload: field
        });
    }
}

export function uiInput(payload) {
    return (dispatch) => {
        dispatch({
            type: "UI_INPUT",
            payload: payload
        });
    }
}

