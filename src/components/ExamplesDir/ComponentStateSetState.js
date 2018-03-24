import React from 'react';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: green,
      mood: "good"
    };  
    //in React, whenever you define an event handler that uses this
    //you need to add 
    //this.methodName = this.methodName.bind(this) 
    //to your constructor function.
    this.changeColorMood = this.changeColorMood.bind(this);
  }
  
  //A component changes its state by calling the function this.setState()
  //this.setState() takes two arguments: 
  //an object that will update the component's state, and a callback
  //this.setState( {hungry: true} );
  //this.setState() takes an object, and merges that object 
  //with the component's current state
	
  changeColorMood() {
    const setColor = this.state.color === yellow ? green : yellow;
    const setMood = this.state.mood === "good" ? "bad" : "good";
    //most common way to call this.setState() is to call a 
    //custom function that wraps a this.setState() call
    this.setState({
      color: setColor,
      mood: setMood
    });
  }

  //onClick attribute with a value of {this.changeColor}.
  //Make sure to include the double curly braces for background
  render() {
    return (
      <div style={{background: this.state.color }}>
        <h1>style= background: this.state.color</h1>
        <p>onClick will call the changeColorMood() to update the state</p>
        <button onClick={this.changeColorMood}>
          Click me to change color and mood
        </button>
        <p>Now my mood is this.state.mood: <b>{this.state.mood}</b></p>
      </div>
    );
  }
}
//this.changeColor's this.setState() updates the state.color
//stype={{background}} changes a virtual DOM object's color to the new this.state.color
//Any time that you call this.setState(), this.setState() 
//AUTOMATICALLY calls .render() as soon as the state has changed.

//That is why you can't call this.setState() from inside of the .render() method!

export default Toggle;
