import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
  getCard, 
  shuffleCards,
  resetGame, 
  toggle
} from './actions/index';

const App = ({ getCard, shuffleCards, disableButton, resetGame, currentFlippedCard, toggle }) => {

  useEffect(() => {
    console.log('loading');
  });

  const shuffleAllCards = () => {
    shuffleCards();
  }

  const reset = () => {
    resetGame();
  }

  const newCard = () => {
    getCard();
  }

  const fold = () => {
    toggle();
  }

  return (
    <div>
      <div className="App">
        <button onClick={shuffleAllCards } disabled={!disableButton}>Shuffle Cards</button>
        <button onClick={newCard}>Get Card</button>
        <button onClick={reset} disabled={disableButton}>Reset</button>
        <button onClick={fold}>Fold</button>
        <div>{currentFlippedCard}</div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getCard: (currentArray) => dispatch(getCard(currentArray)),
  shuffleCards: () => dispatch(shuffleCards()),
  resetGame: () => dispatch(resetGame()),
  toggle: () => dispatch(toggle())
});

const mapStateToProps = state => {
  return {
    allFlippedCards: state.game.arrayFoldedCards,
    disableButton: state.game.disableButton,
    currentFlippedCard: state.game.currentFoldedCard
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);