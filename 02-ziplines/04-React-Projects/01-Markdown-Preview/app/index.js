import React from 'react';
import ReactDOM from 'react-dom';

require('./stylesheets/main.scss');

//box for user input text
var InputBox = React.createClass({
    //setting initial html to cheat sheet for Markdown
    render: function(){
        return <textarea className="half left" value="# Hello World ### This is a Markdown Preview App ** Test it Out by Typing your Mardown Text Here ** Paragraphs are separated by a blank line.  Leave 2 spaces at the end of a line to do a break. Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~
        Unordered Lists:  *Cats *Dogs *Rabbits Ordered Lists: 1.Ice Cream  2.Brownies 3.Cake" onChange={this.props.changeOutput} id="input"/>
    },
});

//take out breaks and use /n instead- example code
// "# Testing *mark*down\n####'
// What is there to test?\n****\n+
// Everything\n+ Nothing\n* Whatever you want!\n----\n| Code
// | None Code |\n-------------- | -------------   |\n| `*Hi*`
// | *Hi*             |\n| `**Bye**`   | **Bye**        |\n| `~~Die~~` | ~~Die~~
//  |\n____\n```\nfunction hello_world() {\n    alert(\"**HELLO WORLD**!\");\n}\n`
// ``\n>Notice that the `**` don't do anything\n\n#### Have fun with this!\n*~
// [Herman Fassett](http://freecodecamp.com/hermanfassett)

//convert text to markdown
var MarkDownText = React.createClass({
    render: function () {
        return <div className="half right" id="output"></div>;
    }
});

//display converted text
var OuterBox = React.createClass({
    getInitialState: function() {
        return {
            input: marked("# Hello World ### This is a Markdown Preview App ** Test it Out by Typing your Mardown Text Here ** Paragraphs are separated by a blank line.  Leave 2 spaces at the end of a line to do a break. Text attributes *italic*, **bold**, `monospace`, ~~strikethrough~~  Unordered Lists:  *Cats *Dogs *Rabbits Ordered Lists: 1.Ice Cream  2.Brownies 3.Cake")
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

