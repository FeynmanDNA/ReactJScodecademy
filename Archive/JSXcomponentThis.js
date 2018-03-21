import React from 'react';
import ReactDOM from 'react-dom';
//in ES6 classes you can omit function
//hence you have a thing like render() {...
class IceCreamGuy extends React.Component {
  //IceCreamGuy has two methods: .food and .render()
  get food() {
    return 'ice cream';
    //a getter is supposed to return a value
    //about getters: they are basically syntactic sugar
    //and make it possible to abstract away some details of your class
  }

  render() {
    return <h1>I like {this.food}.</h1>;
    //this refers to an instance of IceCreamGuy
    //Why don't you need parentheses after this.food?
    //Shouldn't it be this.food()?
  }
}
//You don't need those parentheses because .food is a getter method
ReactDOM.render (
  <MyName />,
  document.getElementById('app')
);
