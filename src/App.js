import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { 
  getCard, 
  shuffleCards,
  resetGame, 
  
} from './actions/index';

const App = ({ 
  getCard, 
  shuffleCards, 
  disableButton, 
  resetGame, 
  player,
  computer,
  fold
}) => {

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

  const foldGame = () => {
    fold();
  }

  return (
    <div>
      <div className="App">
        <button onClick={shuffleAllCards } disabled={!disableButton}>Shuffle Cards</button>
        <button onClick={newCard} disabled={disableButton}>Get Card</button>
        <button onClick={reset} disabled={disableButton}>Reset</button>
        <button onClick={fold} disabled={disableButton}>Fold</button>
      
        <div>
          <p>Player</p>
          <div>{player}</div>
        </div>
        <div>
          <p>Computer</p>
          <div>{computer}</div>
        </div>

      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  getCard: (currentArray) => dispatch(getCard(currentArray)),
  shuffleCards: () => dispatch(shuffleCards()),
  resetGame: () => dispatch(resetGame()),
  fold: () => dispatch(fold())
});

const mapStateToProps = state => {
  return {
    allFlippedCards: state.game.arrayFoldedCards,
    disableButton: state.game.disableButton,
    disabledFoldButton: state.game.disableToggle,
    player: state.game.playerCards,
    computer: state.game.computerCards
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);