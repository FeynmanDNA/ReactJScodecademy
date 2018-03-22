import React from 'react';
import { AddClickChild } from './StatelessChildAddClick';

class AddClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = { totalClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const total = this.state.totalClicks;
    // calling handleClick will result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }

  // The stateful component class passes down
  // handleClick to a stateless component class:
  render() {
    return (
      <div>
        <p>this.state = totalClicks:0</p>
        <p>in Child, onClick=this.props.onClick</p>
        <p>onClick = handleClick = setState:this.state.totalClicks + 1</p>
        <h1>So now the current hit is: {this.state.totalClicks}</h1>
        <AddClickChild onClick={this.handleClick} />
      </div>
    );
  }
}

export default AddClick;
