import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {image} = this.props;

        const pathVariable = image.replace("/", "-");

        return (
            <div className='col align-content-center'>
                <Link to={'/images/' + pathVariable}>
                    <img className="img-fluid" src={'https://live.staticflickr.com/' + image + '.jpg'}/>
                </Link>
            </div>
        )
    }


}