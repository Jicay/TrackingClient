import {combineReducers} from 'redux';
import {RECEIVE_SESSION_ID, CHANGE_CURRENT_PAGE} from "./action";

function sessionId(state = {}, action) {
    switch (action.type) {
        case RECEIVE_SESSION_ID:
            return {
                ...state,
                sessionId: action.sessionId
            };
        default:
            return state
    }
}

function page(state = {}, action) {
    switch (action.type) {
        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                page: action.page
            };
        default:
            return state
    }
}

export default combineReducers({sessionId, page});