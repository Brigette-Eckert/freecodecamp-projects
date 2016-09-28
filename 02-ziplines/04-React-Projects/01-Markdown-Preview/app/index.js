import React from 'react';
import ReactDOM from 'react-dom';

require('./stylesheets/main.scss');


//box for user input text
var InputBox = React.createClass({
    //setting initial html to cheat sheet for Markdown
    //text formatting in block is for MD input to read correctly
    render: function(){
        return <textarea className="half left" defaultValue ="# Hello World
       --------------
        This is a Markdown Preview App.
        Test it Out by Typing your Markdown Text Here.
        *******

        *italic*, **bold**, ~~strikethrough~~
        ******


        Unordered Lists:

          + Ada Lovelace
          + Grace Hopper
          + Anita Borg
         ******


        Ordered Lists:

         1. Javascript
         2. Python
         3. PHP" onChange={this.props.changeOutput} id="input"/>
    },
});


//Box where converted text will be displayed
var OutputBox = React.createClass({
    render: function () {
        return <div className="half right" id="output"></div>;
    }
});

//Render Both Compotents and run function to convert text to MD
var OuterBox = React.createClass({
    getInitialState: function() {
        return {
            input: ""
        }
    },
    componentDidMount: function() {
        return this.changeOutput()
    },

    changeOutput: function() {
        var newInput = document.getElementById('input').value;
        document.getElementById('output').innerHTML = marked(newInput);
        this.setState({
            input: newInput
        });
    },
    //render both components
    render: function() {
        return (
            <div>
                <InputBox changeOutput={this.changeOutput} />
                <OutputBox outputText={this.state.input}/>
            </div>
        )
    }
});

ReactDOM.render(<OuterBox />, document.getElementById('target'));

