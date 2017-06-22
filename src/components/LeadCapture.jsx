var React = require('react');
var EmailField = require('./EmailField.jsx');
var NameField = require('./NameField.jsx');

var LeadCapture = React.createClass({
    onSubmit: function(e) {
      if(!this.refs.fieldEmail.state.valid) {
          alert("Enter valid entry first");
      } else {
          var httpRequestBody={
            email: this.refs.fieldEmail.state.value,
            firstName: this.refs.fieldName.state.value
          };
          this.refs.fieldName.clear();
          this.refs.fieldEmail.clear();
      }
    },
    render: function() {
      return (
          <div className="col-m3">
            <div className="panel panel-default">
              <div className="panel-body">
                  <NameField type="First Name" ref="fieldName" />
                  <br/>
                  <EmailField ref="fieldEmail" />
                  <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
              </div>
            </div>
          </div>
      );
    }
});
module.exports = LeadCapture;
