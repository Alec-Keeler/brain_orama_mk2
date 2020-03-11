import { connect } from 'react-redux';
import { thunkRequestCard } from '../../actions/card_actions';
import { thunkRequestDeck } from '../../actions/deck_actions';
import CardShow from './card_show';

const mSTP = (state, ownProps) => {
    return (
        {card: state.entities.cards[ownProps.match.params.cardId]}
        )
}

const mDTP = dispatch => ({
    requestCard: (deckId, cardId) => dispatch(thunkRequestCard(deckId, cardId)),
    requestDeck: deckId => dispatch(thunkRequestDeck(deckId))
});

export default connect(mSTP, mDTP)(CardShow);