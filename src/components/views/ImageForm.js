import React, {Component} from "react";
import {Container,} from 'reactstrap';
import Image from "./Image";
import EmailForm from "./EmailForm";

export default class ImageForm extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onLoad} = this.props;
        onLoad();
    }

    render() {
        const {history, match} = this.props;
        const imageUrl = match.params.imageUrl.replace('-', '/');

        return (
            <Container className="image container" id="page" >
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