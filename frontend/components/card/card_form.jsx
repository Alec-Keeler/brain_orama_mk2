import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

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
        let goBackLink = <div></div>
        if (this.props.formType === 'Create Card') {
            goBackLink = <Link className='go-back-link' to={`/decks/${this.props.match.params.deckId}`}>Nevermind, go back to the deck!</Link>
        } else {
            goBackLink = <Link className='go-back-link' to={`/decks/${this.props.match.params.deckId}/cards/${this.props.match.params.cardId}`}>Nevermind, go back to the card!</Link>
        }

        return (
            <div className='card-form-container animated fadeIn'>
                <h1 className='card-form-title'>{this.props.formType}</h1>
                <form className='card-form' onSubmit={this.handleSubmit}>
                    <label className='card-input-name'>Question</label>
                        <div className='card-input-div'><textarea maxLength='150' className='card-input-box-q' type="text" value={this.state.question} onChange={this.update('question')} /></div>
                    <label className='card-input-name'>Answer</label>
                        <div className='card-input-div'><textarea maxLength='730' className='card-input-box-a' value={this.state.answer} onChange={this.update('answer')} /></div>
                    <div className='card-form-submit-div'><button className='card-form-submit' type='submit' value={this.props.formType}>{this.props.formType}</button></div>
                </form>
                <div className='go-back-div'>{goBackLink}</div>
            </div>
        )
    }
}

export default withRouter(CardForm)