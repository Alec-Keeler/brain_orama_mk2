import { connect } from 'react-redux';
import { thunkCreateDeck } from '../../actions/deck_actions';
import DeckForm from './deck_form';

const mSTP = state => {
    return (
        {deck: {
            name: '',
            description: '',
            creator_id: state.session.id
        },
        formType: 'Create Deck'}
        )
};

const mDTP = dispatch => ({
    submitDeck: (deck) => dispatch(thunkCreateDeck(deck))
});

export default connect(mSTP, mDTP)(DeckForm);