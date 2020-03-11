import { connect } from 'react-redux';
import { thunkCreateCard } from '../../actions/card_actions';
import CardForm from './card_form';

const mSTP = (state, ownProps) => {
    return (
        {
            card: {
                question: '',
                answer: '',
                author_id: state.session.id,
                deck_id: ownProps.match.params.deckId
            },
            formType: 'Create Card'
        }
    )
}

const mDTP = dispatch => ({
    submitCard: (deckId, card) => dispatch(thunkCreateCard(deckId, card))
})

export default connect(mSTP, mDTP)(CardForm)