import { types } from "../actions/index";

const initialState = {
    array: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    playerCards: [],
    computerCards: [],
    arrayFoldedCards: [],
    currentCardArray: [],
    disableButton: true,
    fold: false
};

export const game = (state = initialState, action) => {
    switch(action.type) {
        case types.SHUFFLE_CARD: {
            const allCards = Array(4).fill(state.array).flat(); // duplicate array four times and put that in one array
 
            return {
                ...state,
                // copy array into currentCardArray
                currentCardArray: [].concat(allCards),
                disableButton: false
            }
        }

        case types.GET_CARD: {
            const indexToRemove = Math.floor(state.currentCardArray.length * Math.random());
            const updatedArray = state.arrayFoldedCards.concat(state.currentCardArray.splice(indexToRemove, 1));
            let currentPlayer = state.fold ? 'computerCards' : 'playerCards';

            return {
                ...state,
                currentFoldedCard: updatedArray,
                [currentPlayer]: [...state[currentPlayer].concat(updatedArray)]
            }
        }

        case types.RESET_GAME: {
            return {
                ...state,
                disableButton: true
            }
        }

        case types.TOGGLE: {
            return {
                ...state,
                fold: !state.fold
            }
        }

        default:
            return state;
    }
}

export default game;