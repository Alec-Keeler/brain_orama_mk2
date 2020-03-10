import { RECEIVE_DECKS, RECEIVE_DECK, REMOVE_DECK } from '../actions/deck_actions';

export const decksReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_DECKS:
            return Object.assign({}, state, action.decks);
        case RECEIVE_DECK:
            return Object.assign({}, state, { [action.deck.id]: action.deck });
        case REMOVE_DECK:
            let newState = Object.assign({}, state);
            delete newState[action.deckId];
            return newState;
        default:
            return state;
    }
}

export default decksReducer