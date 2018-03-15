import React from 'react';
import ReactDOM from 'react-dom';
//in ES6 classes you can omit function
//hence you have a thing like render() {...
class IceCreamGuy extends React.Component {
  //IceCreamGuy has two methods: .food and .render()
  food() {
    return 'ice cream';
  }

  render() {
    //you want to call the function, with (), there, it's not an event handler
    return <h1>I like {this.food()}.</h1>;
  }
}
ReactDOM.render (
  <MyName />,
  document.getElementById('app')
);
