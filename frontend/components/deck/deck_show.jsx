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
            <button onClick={this.handleCardSubmit} value={cardId}>Card {i+1}</button>
        ))
        
        return cardButtons;
    }

    render () {
        if (!this.props.deck) {
            return null
        }

        let currUserId;
        if (!this.props.currentUser) {
            currUserId = null
        } else {
            currUserId = this.props.currentUser.id
        }
    
        let display = <div></div>;
        
        if (currUserId === this.props.deck.creator_id) {
            display = <div>
                        <Link to={`/decks/${this.props.deck.id}/edit`}>Update Deck</Link>
                        <br/>
                        <button onClick={this.handleDelete}>Delete Deck</button>
                    </div>
        } else {
            display = <div></div>
        }

        return (
            <div>
                <h1>{this.props.deck.name}</h1>
                <br/>
                <p>{this.props.deck.description}</p>
                {/* add a link to study/see the cards in the deck */}
                {display}
                {this.cardsList()}
            </div>
        )
    }
}

export default DeckShow;