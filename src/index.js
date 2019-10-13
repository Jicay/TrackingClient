import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "./redux/reducers.js";
import "./myStyles.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import SwitchContainer from "./components/containers/SwitchContainer";

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware))

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <SwitchContainer/>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));