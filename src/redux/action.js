
export const RECEIVE_SESSION_ID = 'RECEIVE_SESSION_ID';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

export const receiveSessionId = (json) => ({
    type: RECEIVE_SESSION_ID,
    sessionId: json.id,
});

export const fetchSessionIdIfNeeded = () => (dispatch) => {
    return dispatch(fetchSessionId())
}

const fetchSessionId = () => dispatch => {
    return fetch(`https://tracking-mouse-back.herokuapp.com/sessions`, {method: 'POST'})
        .then(response => response.json())
        .then(json => {dispatch(receiveSessionId(json))})
}

export const fetchCurrentPage = (page) => (dispatch) => {
    return dispatch(updatePage(page))
}

export const updatePage = (page) => ({
    type: CHANGE_CURRENT_PAGE,
    page,
})

export const sendMousePosition = (x, y, page, sessionId) => dispatch => {
    return fetch(`https://tracking-mouse-back.herokuapp.com/sessions/` + sessionId + '/mouse-positions',
        {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                x,
                y,
                page
            })
        })
}
