import React from 'react';
import ReactDOM from 'react-dom';

//const declaration should not be part of the class declaration itself
//but should occur in a method like render()
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
