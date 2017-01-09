var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('./components/DataTable.jsx');

window.onload = function(){
  ReactDOM.render(
    <DataTable/>,
    document.getElementById('app')
  );
}
