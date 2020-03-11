import React from 'react';
import { withRouter } from 'react-router-dom';

class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.card;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitCard(this.props.match.params.deckId, this.state)
            .then((res) => this.props.history.push(`/decks/${this.props.match.params.deckId}/cards/${res.card.id}`))
    }

    render() {
        return (
            <div>
                <h1>{this.props.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Question
                        <input type="text" value={this.state.question} onChange={this.update('question')} />
                    </label>
                    <label>Answer
                        <textarea value={this.state.answer} onChange={this.update('answer')} />
                    </label>
                    <button type='submit' value={this.props.formType}>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default withRouter(CardForm)