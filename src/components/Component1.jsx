var React = require('react');

var Component1 = React.createClass({
    render: function() {
        var divStyle = {
            marginTop: 10,
            backgroundColor: "pink"
        };
        var headingStyle ={
            backgroundColor: "blue"
        }; 
        var textStyle = {
            color: 'black',
            fontSize: 36 ,
        };
        return (
            <div style={divStyle} >
                <div className="panel panel-primary">
                    <div style={headingStyle} className="panel panel-heading">
                        <h1>
                            {this.props.title}
                        </h1>
                    </div>
                    <div style={textStyle} className="panel panel-body">
                        {this.props.text}
                    </div>
                    <div className="panel panel-body"></div>
                </div>
            </div>
        );
    }
});


module.exports = Component1;
