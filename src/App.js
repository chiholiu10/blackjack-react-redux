import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  getCard, 
  shuffleCards,
  resetGame
} from './actions/index';

const App = ({ getCard, shuffleCards, disableButton, resetGame }) => {

  useEffect(() => {
    console.log('loading');
  });

  const shuffleAllCards = () => {
    console.log(disableButton);
    if(disableButton) {
      shuffleCards();
    } 

    console.log()
    return;
  }

  const reset = () => {
    resetGame();
  }

  const newCard = () => {
    getCard();

  }

  return (
    <div>
      <div className="App">
        <button onClick={shuffleAllCards }>Shuffle Cards</button>
        <button onClick={newCard}>Get Card</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getCard: (currentArray) => dispatch(getCard(currentArray)),
  shuffleCards: () => dispatch(shuffleCards()),
  resetGame: () => dispatch(resetGame())
});

const mapStateToProps = state => {
  return {
    allFlippedCards: state.game.arrayFoldedCards,
    disableButton: state.game.disableButton
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);