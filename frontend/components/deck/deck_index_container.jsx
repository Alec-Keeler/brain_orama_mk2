import { connect } from 'react-redux';
import { thunkRequestDecks } from '../../actions/deck_actions';
import DeckIndex from './deck_index';

const mSTP = state => {
    let decks = Object.values(state.entities.decks)
    return (
            {decks: decks}
        )
}

const mDTP = dispatch => ({
    requestDecks: () => dispatch(thunkRequestDecks())
})

export default connect(mSTP, mDTP)(DeckIndex)