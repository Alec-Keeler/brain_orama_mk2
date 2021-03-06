import React from 'react';
import { Link } from 'react-router-dom';

class CardShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showAnswer: false};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.requestCard(this.props.match.params.deckId, this.props.match.params.cardId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteCard(this.props.match.params.deckId, this.props.match.params.cardId)
            .then(this.props.history.push(`/decks/${this.props.match.params.deckId}`))
    }


    render() {
        if (!this.props.card) {
            return null;
        }

        let buttonName;
        if (this.state.showAnswer) {
            buttonName = 'Hide';
        } else {
            buttonName = 'Reveal';
        }

        let currUserId;
        if (!this.props.currentUser) {
            currUserId = null;
        } else {
            currUserId = this.props.currentUser.id;
        }

        let display = <div></div>;
        if (currUserId === this.props.card.author_id) {
            display = <div className='card-show-extra-btns-div'>
                <Link className='card-show-edit-link' to={`/decks/${this.props.match.params.deckId}/cards/${this.props.card.id}/edit`}>Edit Card</Link>
                <button className='card-show-delete-btn' onClick={this.handleDelete}>Delete Card</button>
            </div>
        }

        return (
            <div className='card-show-container animated zoomIn'>
                <h2 className='card-show-question'>{this.props.card.question}</h2>
                <div className='card-show-answer-div'>{this.state.showAnswer && (<div className='card-show-answer animated flipInX'>{this.props.card.answer}</div>)}</div>
                <div className='card-show-hider-div'><button className='card-show-hider' onClick={this.handleSubmit}>{buttonName}</button>
                <Link className='card-show-deck-link' to={`/decks/${this.props.match.params.deckId}`}>Return to Deck</Link></div>
                {display}
            </div>
        )
    }
}

export default CardShow