import React from 'react';
import { connect } from 'react-redux';
import { resetGame } from '../actions';

const Score = ({player, computer}) => {
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
            console.log('player dead');
        } 

        if(getScore(computer) > 17) {
            console.log('computer stop shuffling');
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

    const mapStateToProps = state => {
        return {
            player: state.game.playerCards,
            computer: state.game.computerCards,
            currentPlayer: state.game.currentScore ? 'player' : 'computer'
        }
    }

export default connect(mapStateToProps, null)(Score);