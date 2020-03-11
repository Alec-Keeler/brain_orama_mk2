import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { thunkRequestCard, thunkUpdateCard } from '../../actions/card_actions'
import CardForm from './card_form';

class UpdateCardForm extends React.Component {
    componentDidMount() {
        this.props.requestCard(this.props.match.params.deckId, this.props.match.params.cardId);
    }

    render() {
        const { card, formType, submitCard } = this.props;
        if (!card) return null;

        return (
            <CardForm 
            card={card}
            formType={formType}
            submitCard={submitCard}/>
        )
    }
}

const mSTP = (state, ownProps) => ({
    card: state.entities.cards[ownProps.match.params.cardId],
    formType: 'Update Deck'
})

const mDTP = dispatch => ({
    requestCard: (deckId, cardId) => dispatch(thunkRequestCard(deckId, cardId)),
    submitCard: (deckId, card) => dispatch(thunkUpdateCard(deckId, card))
})

export default connect(mSTP, mDTP)(UpdateCardForm)