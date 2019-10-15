import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import fetchMock from 'fetch-mock';
import {RECEIVE_SESSION_ID, fetchSessionIdIfNeeded, CHANGE_CURRENT_PAGE, fetchCurrentPage} from "../action";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('fetching', () => {
    afterEach(() => {
        fetchMock.restore()
    })

    it('creates FETCH SESSION ID when fetching session id has been done', () => {
        fetchMock.postOnce('https://tracking-mouse-back.herokuapp.com/sessions', {
            body: { id: 45 },
            headers: { 'content-type': 'application/json' }
        })

        const expectedActions = [
            { type: RECEIVE_SESSION_ID, sessionId: 45 }
        ]
        const store = mockStore({ sessionId: undefined })

        return store.dispatch(fetchSessionIdIfNeeded()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('creates FETCH CURRENT PAGE when fetching current page has been done', () => {
        const expectedActions = { type: CHANGE_CURRENT_PAGE, page: 'image' }
        const store = mockStore({ page: undefined })
        console.log(store.dispatch(fetchCurrentPage('image')));
        expect(store.dispatch(fetchCurrentPage('image'))).toEqual(expectedActions)
            // return of async actions
    })

})