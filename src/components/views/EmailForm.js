import React, {Component} from "react";

export default class EmailForm extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push('/congrats');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="inputMail">Email :</label>
                    <input type="email" id="inputMail" placeholder="Saisissez votre adresse e-mail" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        );
    }
}