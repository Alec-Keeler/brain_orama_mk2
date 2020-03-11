import * as CardAPIUtil from '../util/card_api_util'

export const RECEIVE_CARDS = 'RECEIVE_CARDS'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'

const receiveCards = cards => {
    return (
        {type: RECEIVE_CARDS,
        cards}
    )
}

const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
})

const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId
})

export const thunkRequestCards = (deckId) => dispatch => (
    CardAPIUtil.fetchCards(deckId)
        // .then(cards => console.log(cards))
        .then(cards => dispatch(receiveCards(cards)))
)

export const thunkRequestCard = (deckId, cardId) => dispatch => (
    CardAPIUtil.fetchCard(deckId, cardId)
        .then(card => dispatch(receiveCard(card)))
)

export const thunkCreateCard = (deckId, card) => dispatch => {
    return (
    CardAPIUtil.createCard(deckId, card)
        .then(card => dispatch(receiveCard(card)))
)
}

export const thunkUpdateCard = (deckId, card) => dispatch => (
    CardAPIUtil.updateCard(deckId, card)
        .then(card => dispatch(receiveCard(card)))
)

export const thunkDeleteCard = (deckId, cardId) => dispatch => (
    CardAPIUtil.deleteCard(deckId, cardId)
        .then(card => dispatch(removeCard(card)))
)