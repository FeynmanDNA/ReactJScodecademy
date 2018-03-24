import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  
  componentDidMount() {
    this.clockTimer = setInterval(
      () => this.tick(), 1000
    );
  }

  tick() {
    this.setState(
      {date: new Date()}
    );
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);  
  }
  
  render() {
    return (
      <p><b>{this.state.date.toLocaleDateString()} <span style={{color: 'yellow'}}>{this.state.date.toLocaleTimeString()}</span></b></p>
    );
  }
}

export default Clock;
