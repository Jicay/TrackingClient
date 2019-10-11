import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Home from "./components/views/Home";
import ImageForm from "./components/views/ImageForm";
import Congrats from "./components/views/Congrats";
import rootReducer from "./redux/reducers.js";

import 'bootstrap/dist/css/bootstrap.min.css';

const middleware = [ thunk ];

const store = createStore(rootReducer, applyMiddleware(...middleware))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path='/images/:imageUrl' component={ImageForm} />
                        <Route path='/congrats' component={Congrats} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));