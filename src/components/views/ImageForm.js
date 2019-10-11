import React, {Component} from "react";
import {Container,} from 'reactstrap';
import Image from "./Image";
import EmailForm from "./EmailForm";

export default class ImageForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        console.log(this.props.match.params.imageUrl);
        const {history, match} = this.props;
        const imageUrl = match.params.imageUrl.replace('-', '/');

        return (
            <Container className="image container">
                <div className='row'>
                    <Image image={imageUrl}/>
                </div>
                <div className='row'>
                    <EmailForm history={history}/>
                </div>
            </Container>
        );
    }
}