// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }

//The methods imported from 'react-dom' are meant for 
//interacting with the DOM
import ReactDOM from 'react-dom';
//DOM is used in React applications, but it isn't part of React

//A component class is like a factory that builds components
//It builds these components by consulting a set of instructions,
class MyComponentClass extends React.Component {
  //instructions go here, between the curly braces
  //everything in between these curly-braces is 
  //instructions for how to build components
  render() {
    return <h1>Hello world</h1>;
  }
}
//MyComponentClass is now a working component class! 
//It's ready to follow its instructions and 
//make some React components.
//class names are written in UpperCamelCase

//To make a React component, you write a JSX element.
//Instead of naming your JSX element something like h1 or div 
//like you've done before, give it the same name as a component class
//JSX elements can be either HTML-like, or component instances. 
//JSX uses capitalization to distinguish between the two!

ReactDOM.render(
  <MyComponentClass />, 
  document.getElementById('app')
);
//ReactDOM.render() will tell <MyComponentClass /> to call its render method.
