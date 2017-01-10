var React = require('react');

var TableFoot = React.createClass({
  render: function() {
    return(
      <tfoot>
        <tr>
          <td><a href="www.journeyToNowhere.com">See More Openings This Week</a></td>
        </tr>
      </tfoot>
      )
  }
});

module.exports = TableFoot;