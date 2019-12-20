import React from 'react';
import { connect } from 'react-redux';
import { 
    resetGame,
    fold, 
    checkWinner
} from '../actions/index';

const Score = ({ 
    player, 
    computer, 
    fold, 
    checkWinner, 
    resetGame
}) => {
    const getScore = currentPlayer =>
        currentPlayer.reduce((a, b) => {
            switch (b) {
                case "A":
                    return a + 11;
                case "K":
                case "Q":
                case "J":
                    return a + 10;
                default:
                    return a + b;
                }
        }, 0);

        if(getScore(player) > 21) {
            fold();
        } 

        if(getScore(computer) > 17) {
            checkWinner(getScore(player), getScore(computer));
            resetGame();
        }

        return (
            <div>
                <div>
                    currentScore
                    <div>Player</div>
                    <div>{getScore(player)}</div>

                    <div>Computer</div>
                    <div>{getScore(computer)}</div>
                </div>
            </div>
        )
    }

const mapDispatchToProps = dispatch => ({
    fold: () => dispatch(fold()),
    checkWinner: (getPlayerScore, getComputerScore) => dispatch(checkWinner(getPlayerScore, getComputerScore)),
    resetGame: () => dispatch(resetGame())
});

const mapStateToProps = state => {
    console.log();
    return {
        player: state.game.playerCards,
        computer: state.game.computerCards,
        currentPlayer: state.game.currentScore ? 'player' : 'computer'
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);