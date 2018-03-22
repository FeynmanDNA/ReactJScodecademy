import React from 'react';
import ButtonMsg from './ButtonForProps';

/*One major source of confusion is the fact that 
 * names like onClick have special meaning, but 
 * only if they're used on HTML-like elements.
 */

/*When you give a <button></button> an attribute named onClick, 
 * then the name onClick has special meaning. 
 * As you've learned, this special onClick attribute 
 * creates an event listener, listening for clicks
 */

class AlertButton extends React.Component {
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

  //DO NOT ADD COMMA!
  //Methods should never be comma-separated, if inside of a class body.
  //This is to emphasize the fact that classes and object literals are different.

  render() {
    //render the Button instance
    return (
      <div>
        <h1>Handle Events using props</h1>
        <p>Event handlers can be called and passed between components.</p> 
        <p>This special onClick attribute creates an event listener, listening for clicks</p>
        <ButtonMsg callAlert={this.handleAlert} />
      </div>
    );
  }
}

export default AlertButton;
