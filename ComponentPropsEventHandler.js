import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render () {
    return (
      //display a button html with a special event attribute
      //and onclick will call the local function callAlert
      <button onClick={this.props.callAlert}>
        Click here for Message
      </button>
    );
  }
}

/*One major source of confusion is the fact that 
 * names like onClick have special meaning, but 
 * only if they're used on HTML-like elements.
 */

/*When you give a <button></button> an attribute named onClick, 
 * then the name onClick has special meaning. 
 * As you've learned, this special onClick attribute 
 * creates an event listener, listening for clicks
 */

class Example extends React.Component {
  //pass functions as props
  //very common to pass event handler functions
  handleAlert() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  //You define an event handler as a method on the component class, 
  //just like the render method. 
  //Almost all functions that you define in React will be defined 
  //in this way, as methods in a class.

  // DO NOT ADD COMMA!

  render() {
    //render the Button instance
    return (
      <Button callAlert={this.handleAlert} />
    );
  }
}
