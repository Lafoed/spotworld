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

export function openEvent(payload) {
    return (dispatch) => {
        dispatch({
            type: "OPEN_EVENT",
            payload: payload
        });
    }
}

export function toggleView(field) {
    return (dispatch) => {
        dispatch({
            type: "TOGGLE_VIEW",
            payload: field
        });
    }
}
