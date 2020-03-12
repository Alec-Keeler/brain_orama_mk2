import React from 'react';
import { Link } from 'react-router-dom';

class DeckShow extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCardSubmit = this.handleCardSubmit.bind(this)
    }

    componentDidMount() {
        this.props.requestDeck(this.props.match.params.deckId);
        this.props.requestCards(this.props.match.params.deckId);
    }

    handleDelete() {
        this.props.deleteDeck(this.props.match.params.deckId)
            .then(() => this.props.history.push('/decks/'))
    }

    handleCardSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/decks/${this.props.match.params.deckId}/cards/${e.target.value}`)
    }

    cardsList() {
        let cardIds = getState().entities.decks[this.props.match.params.deckId].card_ids;

        let cardButtons = cardIds.map((cardId, i) => (
            <button className='card-btn' onClick={this.handleCardSubmit} value={cardId}>Card {i+1}</button>
        ))
        
        return cardButtons;
    }

    render () {
        if (!this.props.deck) {
            return null;
        }

        let currUserId;
        if (!this.props.currentUser) {
            currUserId = null;
        } else {
            currUserId = this.props.currentUser.id;
        }
    
        let display = <div></div>;
        
        if (currUserId === this.props.deck.creator_id) {
            display = <div className='creator-btns-div'>
                        <Link className='creator-link' to={`/decks/${this.props.deck.id}/edit`}>Update Deck</Link>
                        <Link className='creator-link' to={`/decks/${this.props.deck.id}/cards/new`}>Add Card</Link>
                        <button className='creator-btn' onClick={this.handleDelete}>Delete Deck</button>
                    </div>
        } else {
            display = <div></div>
        }

        return (
            <div className='deck-show-master-cont'>
                <div className='deck-show-container animated slideInLeft slow'>
                    <h1 className='deck-show-title'>{this.props.deck.name}</h1>
                    <p className='deck-show-desc'>{this.props.deck.description}</p>
                    {display}
                </div>
                <div className='card-btn-container animated slideInLeft slower'>{this.cardsList()}</div>
            </div>
        )
    }
}

export default DeckShow;