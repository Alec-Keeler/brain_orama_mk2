import React from 'react';
import { connect } from 'react-redux';
import { thunkRequestDeck, thunkUpdateDeck } from '../../actions/deck_actions';
import DeckForm from './deck_form';

class UpdateDeckForm extends React.Component {
    componentDidMount() {
        this.props.requestDeck(this.props.match.params.deckId);
    }

    render() {
        debugger
        const { deck, formType, submitDeck } = this.props;

        if (!deck) return null;
        
        return (
            <DeckForm
            deck={deck}
            formType={formType}
            submitDeck={submitDeck}/>
        )
    }
}

const mSTP = (state, ownProps) => ({
    deck: state.entities.decks[ownProps.match.params.deckId],
    formType: 'Update Deck'
})

const mDTP = dispatch => ({
    requestDeck: (deckId) => dispatch(thunkRequestDeck(deckId)),
    submitDeck: (deck) => dispatch(thunkUpdateDeck(deck))
})

export default connect(mSTP, mDTP)(UpdateDeckForm)