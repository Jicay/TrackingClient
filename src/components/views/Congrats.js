import React, {Component} from "react";
import {Container,} from 'reactstrap';
import {Link} from "react-router-dom";

export default class Congrats extends Component {
    constructor(props) {
        super(props);
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