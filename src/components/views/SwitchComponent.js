import React, {Component} from "react";
import {useLocation} from 'react-router'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import HomeContainer from "../containers/HomeContainer";
import ImageFormContainer from "../containers/ImageFormContainer";
import CongratsContainer from "../containers/CongratsContainer";

export default class SwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {x: 0, y: 0};
    }

    componentDidMount() {
        const {onLoad} = this.props;
        onLoad();
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        const {page, sessionId, sendMousePosition} = this.props;
        const {x, y} = this.state;
        const height = document.getElementById('page').clientHeight;
        const width = document.getElementById('page').clientWidth;
        console.log(x, y, width, height);
        sendMousePosition(x/width, y/height, page, sessionId);
    }

    _onMouseMove(e) {
        this.setState({x: e.nativeEvent.x, y: e.nativeEvent.y});
    }

    render() {
        return (
            <div onMouseMove={this._onMouseMove.bind(this)} ref={ (divElement) => this.divElement = divElement}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route path='/images/:imageUrl' component={ImageFormContainer}/>
                        <Route path='/congrats' component={CongratsContainer}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}