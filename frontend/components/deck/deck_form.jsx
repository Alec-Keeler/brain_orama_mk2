import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';


class DeckForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.deck;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitDeck(this.state)
            .then((res) => this.props.history.push(`/decks/${res.deck.id}`))
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </label>
                    <label>Description
                        <textarea value={this.state.description} onChange={this.update('description')}/>
                    </label>
                    <button type='submit' value={this.props.formType}>{this.props.formType}</button>
                </form>
            </div>
            )
    }
}

export default withRouter(DeckForm);
