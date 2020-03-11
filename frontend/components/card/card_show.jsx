import React from 'react';
import { Link } from 'react-router-dom';

class CardShow extends React.Component {
    componentDidMount() {
        this.props.requestCard(this.props.match.params.deckId, this.props.match.params.cardId);
    }

    render() {
        if (!this.props.card) {
            return null
        }

        return (
            <div>
                <p>{this.props.card.question}</p>
            </div>
        )
    }
}

export default CardShow