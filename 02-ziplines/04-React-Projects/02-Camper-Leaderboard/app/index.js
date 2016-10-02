import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

require('./stylesheets/main.scss');

//set up components

//Leader Board Labels
var BoardLabels = React.createClass({
    render: function(){
        return(
            <div id="board-labels">
                <div id="name">Camper Name</div>
                <div id="recent-points"> Points in the Past 30 Days</div>
                <div id="total-points"> All Time Points</div>
            </div>
        )
    }
});


var CamperData = React.createClass({
    //make API call
    render: function(){
        //all time data
        axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
            .then(function(response){
                console.log("all time")
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            });
        //last 30 days data
        axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(function(response){
                console.log("recent")
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            });
        return(
        <div id="board"> Camper Data</div>
        )
    }
    //loop over camper data and display- each camper as competent that displays?

    //toggle between last 30 days and all time
});


//Main competent rendering all components
var LeaderBoard = React.createClass({
    render: function(){
        return(
            <div>
                <div id="board-title"> Camper Leaderboard </div>
                <BoardLabels/>
                <CamperData/>
            </div>
        )
    }
});


//render components
ReactDOM.render(<LeaderBoard/>, document.getElementById('board'));
