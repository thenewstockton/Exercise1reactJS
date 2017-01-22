var React = require('react');

var ListManager = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
});


module.exports = ListManager;
