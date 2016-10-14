import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


require('./stylesheets/main.scss');

var BoardLabels = React.createClass({
    render: function(){
        return(
            <div id="board-labels">
                <div className="column rank">Rank</div>
                <div className="column user">Camper</div>
                <div className="column points all-time btn-active">
                    <button className={this.props.active === 'allTime' ? "btn-active" : ""}  
                            onClick={this.props.displayAllTime}>All Time</button>
                </div>
                <div className="column points recent">
                    <button className={this.props.active === 'recent' ? "btn-active" : ""}  
                            onClick={this.props.displayRecent}>Recent</button>
                </div>
            </div>
        )
    }
});

var CamperData = React.createClass({
    render: function(){
        return(
            <div id="board">
                {this.props.items.map(function(item, index) {
                    return <div className="camper-row" key={index}> 
                        <div className="column rank"> {index+1}</div> 
                        <div className="column avatar"><img src={item.img}/></div>
                        <div className="column username">{item.username}</div> 
                        <div className="column points all-time"> {item.alltime}</div> 
                        <div className="column points recent">{item.recent}</div> 
                    </div>
                })}
            </div>
        )
    }
});

//Main competent rendering all components
var LeaderBoard = React.createClass({
    getInitialState: function(){
        return {
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
                    recent: (recent.data),
                    allTime: (allTime.data)
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
                <div id="board-title"> FCC Camper Leaderboard </div>
                <BoardLabels displayAllTime={this.displayAllTime} 
                             displayRecent={this.displayRecent} 
                             active={this.state.active} />
                <CamperData items={this.state[this.state.active]}/>
            </div>
        )
    }
});


//render components
ReactDOM.render(<LeaderBoard/>, document.getElementById("app"));