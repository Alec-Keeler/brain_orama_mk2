import { connect } from 'react-redux';
import { thunkRequestCard, thunkUpdateCard, thunkDeleteCard } from '../../actions/card_actions';
import { thunkRequestDeck } from '../../actions/deck_actions';
import CardShow from './card_show';

const mSTP = (state, ownProps) => {
    return (
        {
            card: state.entities.cards[ownProps.match.params.cardId],
            currentUser: state.entities.users[state.session.id]
        }
    )
}

const mDTP = dispatch => ({
    requestCard: (deckId, cardId) => dispatch(thunkRequestCard(deckId, cardId)),
    requestDeck: deckId => dispatch(thunkRequestDeck(deckId)),
    updateCard: (deckId, card) => dispatch(thunkUpdateCard(deckId, card)),
    deleteCard: (deckId, cardId) => dispatch(thunkDeleteCard(deckId, cardId))
});

export default connect(mSTP, mDTP)(CardShow);