var React = require('react');
var TableHead = require('./TableHead.jsx');
var TableBody = require('./TableBody.jsx');
var TableFoot = require('./TableFoot.jsx');

var DataTable = React.createClass({
  getInitialState: function() {
    return {data: null}
  },
  render: function() {
    return(
      <table className='data-table'>
       <TableHead/>
        <TableBody movies={this.state.data}/>
        <TableFoot/>
      </table>
      )
  }
});

module.exports = DataTable;