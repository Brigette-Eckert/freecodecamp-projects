import React from 'react';
import ReactDOM from 'react-dom';

require('./stylesheets/main.scss');

//set up components

//board compotent
    //board title compotent
    //board labels competent
        //rank div
        //name div
        //recent points div
        //all time points div
    //bord data compotent

var LeaderBoard = React.createClass({
    render: function(){
        return(
            <div id="main-container">
                <div id="board-title"> Camper Leaderboard </div>
                <div id="board-labels">
                    <div id="name">Camper Name</div>
                    <div id="recent-points"> Points in the Past 30 Days</div>
                    <div id="total-points"> All Time Points</div>
                </div>
                <div id="board"></div>
            </div>
        )
    }

});


ReactDOM.render(<LeaderBoard/>, document.getElementById('board'));

//render components