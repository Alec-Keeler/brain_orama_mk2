export const fetchCards = (deckId) => (
    $.ajax({
        url: `/api/decks/${deckId}/cards`
    })
)

export const fetchCard = (deckId, cardId) => (
    $.ajax({
        url: `/api/decks/${deckId}/cards/${cardId}`,
        method: 'GET'
    })
)

export const createCard = (deckId, card) => {
return (
        $.ajax({
            url: `/api/decks/${deckId}/cards`,
            method: 'POST',
            data: { card }
        })
    )
}

export const updateCard = (deckId, card) => (
    $.ajax({
        url: `/api/decks/${deckId}/cards/${card.id}`,
        method: 'PATCH',
        data: { card }
    })
)

export const deleteCard = (deckId, cardId) => (
    $.ajax({
        url: `api/decks/${deckId}/cards/${cardId}`,
        method: 'DELETE'
    })
)