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
            <div id="board">
                {this.props.items.map(function(item, index) {
                    return <div className="camper-row" key={index}> {index+1} {item.username} {item.alltime}, {item.recent} <img src={item.img}/></div>
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

                console.log(recent);

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
        console.log(this.state);
        return(
            <div>
                <div id="board-title"> Camper Leaderboard </div>
                <BoardLabels displayAllTime={this.displayAllTime} displayRecent={this.displayRecent} />
                <CamperData items={this.state.allTime}/>
            </div>
        )
    }
});


//render components
ReactDOM.render(<LeaderBoard/>, document.getElementById("app"));