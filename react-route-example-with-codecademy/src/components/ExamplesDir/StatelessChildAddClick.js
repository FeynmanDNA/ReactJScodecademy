import React from 'react';

export class AddClickChild extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click me to increment the number by 1
      </button>
    );
  }
}
