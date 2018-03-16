import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting';

/*This is the Greeting.js
 * import React from 'react';
 *
 * export class Greeting extends React.Component {
 *   render() {
 *       return <h1>Hi there, {this.props.name}!</h1>;
 *         }
 *         }
 */
export class App extends React.Component {
  //add a <Greeting /> instance to App's render method
  //Give <Greeting /> an attribute with a name of "name."
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        
        <Greeting name="dog" />
        
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
