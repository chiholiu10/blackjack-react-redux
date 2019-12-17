import { types } from "../actions/index";

const initialState = {
    array: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'],
    arrayFoldedCards: [],
    currentCardArray: [],
    disableButton: true
};

export const game = (state = initialState, action) => {
    switch(action.type) {
        case types.SHUFFLE_CARD: {
            const allCards = Array(4).fill(state.array).flat(); // duplicate array four times and put that in one array
           
            return {
                ...state,
                currentCardArray: [].concat(allCards),
                disableButton: false
            }
        }

        case types.GET_CARD: {
            const indexToRemove = Math.floor(state.currentCardArray.length * Math.random());
            const updatedArray = state.arrayFoldedCards.concat(state.currentCardArray.splice(indexToRemove, 1));
            
            return {
                ...state,
                arrayFoldedCards: updatedArray
            }
        }

        case types.RESET_GAME: {
            return {
                ...state,
                disableButton: true
            }
        }



        case types.SHUFFLE_CARD: {
            return state;
        }

        default:
            return state;
    }
}

export default game;