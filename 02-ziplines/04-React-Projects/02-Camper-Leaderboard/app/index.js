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
                <div id="rank"> Rank</div>
                <div id="name">Camper</div>
                <div id="recent-points"> <button onClick={this.props.displayRecent}> Last 30 Days Points </button></div>
                <div id="total-points"> <button onClick={this.props.displayAllTime}> All Time Points </button> </div>
            </div>
        )
    }
});

var CamperData = React.createClass({
    render: function(){
        return(
            <div id="board">
                {this.props.items.map(function(item, index) {
                    return <div className="camper-row" key={index}> <span className="rank"> {index+1} </span> <span className="username"> <img src={item.img}/> {item.username} </span> <span className="alltime-points"> {item.alltime} </span> <span className="recent-points">{item.recent} </span> </div>
                })};
            </div>
        )
    }
});

//Main competent rendering all components
var LeaderBoard = React.createClass({
    getInitialState: function(){
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
        this.setState({active: 'allTime'});
    },
    displayRecent: function(){
        console.log("display recent points");
        this.setState({active: 'recent'});
    },
    render: function(){
        console.log(this.state);
        return(
            <div>
                <div id="board-title"> Camper Leaderboard </div>
                <BoardLabels displayAllTime={this.displayAllTime} displayRecent={this.displayRecent} />
                <CamperData items={this.state[this.state.active]}/>
            </div>
        )
    }
});


//render components
ReactDOM.render(<LeaderBoard/>, document.getElementById("app"));