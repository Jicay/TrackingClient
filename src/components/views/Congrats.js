import React, {Component} from "react";
import {Container,} from 'reactstrap';
import {Link} from "react-router-dom";

export default class Congrats extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {onLoad} = this.props;
        onLoad();
    }

    render() {
        return (
            <Container className="congrats">
                <div>
                    Bravo pour avoir soumis !
                </div>
                <Link to="/">Retour à l'accueil</Link>
            </Container>
        );
    }
}