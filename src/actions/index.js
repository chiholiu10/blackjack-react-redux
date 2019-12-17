export const types = {
    SHUFFLE_CARD: 'SHUFFLE_CARD',
    GET_CARD: 'GET_CARD',
    RESET_GAME: 'RESET_GAME',
    TOGGLE: 'TOGGLE'
}   

export const getCard = () => ({
    type: types.GET_CARD
});

export const shuffleCards = () => ({
    type: types.SHUFFLE_CARD
});

export const resetGame = () => ({
    type: types.RESET_GAME
})

export const toggle = () => ({
    type: types.TOGGLE
})