import { connect } from 'react-redux';
import { thunkRequestDeck, thunkDeleteDeck, thunkUpdateDeck } from '../../actions/deck_actions';
import DeckShow from './deck_show';

const mSTP = (state, ownProps) => {
    return (
        {
            deck: state.entities.decks[ownProps.match.params.deckId],
            currentUser: state.entities.users[state.session.id]
        }
    )
}

const mDTP = dispatch => ({
    requestDeck: deckId => dispatch(thunkRequestDeck(deckId)),
    updateDeck: deck => dispatch(thunkUpdateDeck(deck)),
    deleteDeck: deckId => dispatch(thunkDeleteDeck(deckId))
})

export default connect(mSTP, mDTP)(DeckShow)