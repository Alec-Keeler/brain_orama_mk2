import * as DeckAPIUtil from '../util/deck_api_util'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_DECK = 'RECEIVE_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

const receiveDecks = decks => {
    return (
        {type: RECEIVE_DECKS,
        decks}
    )
}

const receiveDeck = deck => {
    // debugger
    return (
        {type: RECEIVE_DECK,
        deck}
        )
}

const removeDeck = deckId => ({
    type: REMOVE_DECK,
    deckId
})

export const thunkRequestDecks = () => dispatch => (
    DeckAPIUtil.fetchDecks()
        .then(decks => dispatch(receiveDecks(decks)))
)

export const thunkRequestDeck = (deckId) => dispatch => (
    DeckAPIUtil.fetchDeck(deckId)
        .then(deck => dispatch(receiveDeck(deck)))
)

export const thunkCreateDeck = deck => dispatch => (
    DeckAPIUtil.createDeck(deck)
        .then(deck => dispatch(receiveDeck(deck)))
)

export const thunkUpdateDeck = deck => dispatch => (
    DeckAPIUtil.updateDeck(deck)
        .then(deck => dispatch(receiveDeck(deck)))
)

export const thunkDeleteDeck = deckId => dispatch => (
    DeckAPIUtil.deleteDeck(deckId)
        .then(deck => dispatch(removeDeck(deck.id)))
)