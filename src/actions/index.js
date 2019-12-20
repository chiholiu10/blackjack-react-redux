export const types = {
    SHUFFLE_CARD: 'SHUFFLE_CARD',
    GET_CARD: 'GET_CARD',
    RESET_GAME: 'RESET_GAME',
    TOGGLE: 'TOGGLE',
    CHECK_WINNER: 'CHECK_WINNER'
}   

export const getCard = () => ({
    type: types.GET_CARD
});

export const shuffleCards = () => ({
    type: types.SHUFFLE_CARD
});

export const resetGame = () => ({
    type: types.RESET_GAME
});

export const fold = () => ({
    type: types.TOGGLE
});

export const checkWinner = (playerScore, computerScore) => ({
    type: types.CHECK_WINNER,
    playerScore,
    computerScore
});