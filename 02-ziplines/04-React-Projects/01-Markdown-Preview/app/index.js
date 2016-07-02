import React from 'react';
import ReactDOM from 'react-dom';


console.log(marked('I am using __markdown__.'));



var HelloMessage = React.createClass({
    render: function () {
        return <h1>Hello {this.props.message}! </h1>;
    }
});

ReactDOM.render(<HelloMessage message="World" /> , document.getElementById('output'));

// get data from textbox and pass into MarkDownText function
//
// var MarkDownText = React.createClass({
//     render: function (data) {
//         return marked<p> {this.props.fata} </p?;
//     }
// })

//ReactDom.render(<MarkDownText data = "#Text" /> document.getElementById('output'));

