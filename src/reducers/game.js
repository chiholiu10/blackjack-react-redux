import { types } from "../actions/index";

export const resultStatus = {
    PLAYING: 'Playing',
    WIN: 'Win',
    EQUAL: 'Equal',
    LOSE: 'Lose'
}

const initialState = {
    array: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    playerCards: [],
    computerCards: [],
    arrayFoldedCards: [],
    currentCardArray: [],
    disableButton: true,
    disableToggle: true,
    fold: false,
    currentStatusGame: resultStatus.PLAYING
};

export const game = (state = initialState, action) => {
    switch(action.type) {
        case types.SHUFFLE_CARD: {
            const allCards = Array(4).fill(state.array).flat(); // duplicate array four times and put that in one array
 
            return {
                ...state,
                // copy array into currentCardArray
                currentCardArray: [].concat(allCards),
                disableButton: false,
                disableFoldButton: true,
                currentStatusGame: resultStatus.PLAYING
            }
        }

        case types.GET_CARD: {
            const indexToRemove = Math.floor(state.currentCardArray.length * Math.random());
            const updatedArray = state.arrayFoldedCards.concat(state.currentCardArray.splice(indexToRemove, 1));
            let currentPlayer = state.fold ? 'computerCards' : 'playerCards';

            return {
                ...state,
                currentFoldedCard: updatedArray,
                [currentPlayer]: [...state[currentPlayer].concat(updatedArray)],
                currentScore: state.fold
            }
        }

        case types.RESET_GAME: {
            return {
                ...state,
                disableButton: true,
                fold: false,
                playerCards: [],
                computerCards: [],
                playerFinalScore: 0,
                computerFinalScore: 0
            }
        }

        case types.TOGGLE: {
            console.log('toggling')
            return {
                ...state,
                fold: true
            }
        }

        case types.SCORE: {
            return {
                ...state,
                playerScore: action.getPlayerScore
            }
        }

        case types.CHECK_WINNER: {
            const win = action.playerScore < 21 && action.computerScore < action.playerScore;
            const equal = action.playerScore < 21 && action.player === action.computerScore;
            const lose = action.playerScore < 21 && action.player < action.computerScore || action.playerScore > 21;

            const currentResultStatus = () => {
                if(win) return resultStatus.WIN;
                if(equal) return resultStatus.EQUAL;
                if(lose) return resultStatus.LOSE;
                return resultStatus.PLAYING;
            }


            return {
                ...state,
                playerFinalScore: action.playerScore,
                computerFinalScore: action.computerScore,
                currentStatusGame: currentResultStatus()
            }
        }

        default:
            return state;
    }
}

export default game;