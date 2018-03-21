import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

//make a component display passed-in information:
// Find the component class that is going to receive that information
// Include this.props.name-of-information in that component 
// class's render method's return statement.
ReactDOM.render(
  <Greeting firstName='Sea' />, 
  document.getElementById('app')
);
