import React from 'react';

class Elongation extends React.Component {
  // Elongation Component is to elongation the string 
  // but make it only render a button to toggle first
  // then elongation animation occurs
  componentDidMount() {
    this.interval = setInterval(
      () => {this.props.triggerElongation();}, 100
    );
  }

  // when click the button, it will trigger this.props.toggle
  // and the component will unmounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // render a button for the toggle
  render() {
    return (
      <button onClick={this.props.triggerStop}>
        Stop
      </button>
    );
  }
}

export default Elongation;
