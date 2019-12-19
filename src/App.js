import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { playerScore } from './components/score';
import { 
  getCard, 
  shuffleCards,
  resetGame, 
  toggle
} from './actions/index';

const App = ({ 
  getCard, 
  shuffleCards, 
  disableButton, 
  resetGame, 
  player,
  computer,
  toggle,
  disabledFoldButton
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

  console.l

  const fold = () => {
    toggle();
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
  toggle: () => dispatch(toggle())
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