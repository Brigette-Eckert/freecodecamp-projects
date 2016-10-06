import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


//
require('./stylesheets/main.scss');

//set up components
// use array map- return jsx

//Leader Board Labels
var BoardLabels = React.createClass({
    render: function(){
        return(
            <div id="board-labels">
                <div id="name">Camper Name</div>
                <div id="recent-points"> <button onClick={this.props.displayRecent}> Last 30 Days Points </button></div>
                <div id="total-points"> <button onClick={this.props.displayAllTime}> All Time Points </button> </div>
            </div>
        )
    }
});

var CamperData = React.createClass({
    render: function(){
        return(
            //loop over array of camper data rows - with array .map  from data array
            // two arrays in this.state.recent, this.state.allTime
            // this.state[this.state.active].map
        <div id="board">
            <div className="camper-row">{this.props.rank} {this.props.img} {this.props.username} {this.props.recent} {this.props.alltime}</div>
        </div>
        )
    }


    //toggle between last 30 days and all time -on click using state, when clicking on 30days label or on Alltime label
});


//Main competent rendering all components
var LeaderBoard = React.createClass({
    getIntialState: function(){
        return{
            allTime: [],
            recent: [],
            active: 'allTime'
        }
    },
    componentDidMount: function() {
        let component = this;
        axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime').then(function(allTime){
            axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/recent').then(function(recent){
                component.setState({
                    recent: recent.data,
                    allTime: allTime.data
                });
            })
        }).catch(function(err){console.log(err)});
    },
    displayAllTime: function(){
        console.log("display all time points");
       this.state.active = 'allTime'
    },
    displayRecent: function(){
        console.log("display recent points");
        this.state.active = 'recent'
    },
    render: function(){
        return(
            <div>
                <div id="board-title"> Camper Leaderboard </div>
                <BoardLabels displayAllTime={this.displayAllTime} displayRecent={this.displayRecent} />
                <CamperData/>
            </div>
        )
    }
});


//render components
ReactDOM.render(<LeaderBoard/>, document.getElementById("app"));
