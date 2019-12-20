import React from 'react';
import { connect } from 'react-redux';

const CheckWinner = ({ statusGame }) => {
    return (
        <div>
            <div>
                Game Result
                {statusGame}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        statusGame: state.game.currentStatusGame
    }
}

export default connect(mapStateToProps, null)(CheckWinner);


