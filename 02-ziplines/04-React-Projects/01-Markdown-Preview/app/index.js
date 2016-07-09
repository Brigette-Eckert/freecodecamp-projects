import React from 'react';
import ReactDOM from 'react-dom';

require('./main.scss');

var InputBox = React.createClass({
    render: function() {
        return <textarea className="half left" onChange={this.props.changeOutput} id="input"/>
    }
});


var MarkDownText = React.createClass({
    render: function () {
        return <div className="half right" id="output"></div>;
    }
});

var OuterBox = React.createClass({
    getInitialState: function() {
        return {
            input: "# Hello World!"
        }
    },
    changeOutput: function() {
        var newInput = document.getElementById('input').value;
        document.getElementById('output').innerHTML = marked(newInput);
        this.setState({
            input: newInput
        });
    },
    render: function() {
        return (
            <div>
                <InputBox changeOutput={this.changeOutput} />
                <MarkDownText outputText={this.state.input}/>
            </div>
        )
    }
});

ReactDOM.render(<OuterBox />, document.getElementById('target'));

