import React from 'react';

class ButtonMsg extends React.Component {
  render () {
    return (
      //display a button html with a special event attribute
      //and onclick will call the local function callAlert
      <button onClick={this.props.callAlert}>
        Click here for Message
      </button>
    );
  }
}

export default ButtonMsg;
