import React, {Component} from "react";

export default class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {image} = this.props;

        const pathVariable = image.replace("/", "-");

        return (
            <div className='col align-content-center'>
                <a href={'/images/' + pathVariable}>
                    <img className="img-fluid" src={'https://live.staticflickr.com/' + image + '.jpg'}/>
                </a>
            </div>
        )
    }


}