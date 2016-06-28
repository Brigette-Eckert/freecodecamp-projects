console.log(marked('I am using __markdown__.'));

var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

// get data from textbox and pass into MarkDownText function

var MarkDownText = React.createClass({
    render: function (data) {
        return marked(data);
    }
})