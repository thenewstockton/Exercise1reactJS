var React = require('react');
var ReactDOM = require('react-dom');
var Component1 = require('./components/Component1.jsx');

ReactDOM.render(
    <Component1 title="20" text="New followeers added this month"/>, document.getElementById('container1')
);

ReactDOM.render(
    <Component1 title="$ 1250" text="Average Monthly Income"/>, document.getElementById('container2')
);

ReactDOM.render(
    <Component1 title="$ 13865" text="Yearly Income Goal"/>, document.getElementById('container3')
);
