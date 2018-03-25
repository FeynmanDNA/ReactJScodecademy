import React from 'react';
import {Route,Link} from 'react-router-dom';
import CoinOutCome from './JSXconditionalWithIf';
import change2Tails from './JSXeventListener';
import styleMe from './StyleSyntax';

//If the router’s path and the location are successfully matched,
//an object is created and we call it the match object

/* match.url is a string that returns the matched portion of the URL.
 * This is particularly useful for building nested <Link>s
 * match.path is a string that returns the route’s path string
 * match.params is an object containing key/value pairs from the URL
 * parsed by the Path-to-RegExp package.
 */

const JSXbasics = ({match}) => {
  return (
    <div>
      <h1>JSX conditionals and event-listener examples.</h1>
      <p>JSX itself cannot have logic controls, but we can always make use of logical conditionals like with if-statements and '&&' to solve problems.</p>
      <p>In JSX's HTML-like elements, event listener names are written in camelCase, like onClick.</p>
      <p>And lastly, in JSX you can apply styles like background-color and margin-top, but in CamelCase (backgroundColor and marginTop)</p>
      <ul>
        <li><Link to={`${match.url}/Cointoss`}>Cointoss</Link></li>
        <li><Link to={`${match.url}/ChangeTails`}>ChangeTails</Link></li>
        <li><Link to={`${match.url}/StyleSyntax`}>StyleSyntax</Link></li>
      </ul>
      <hr />
      <Route exact path='/JSX/Cointoss'
             component={CoinOutCome} />
      <Route exact path='/JSX/ChangeTails'
             component={change2Tails} />
      <Route exact path='/JSX/StyleSyntax'
             component={styleMe} />
    </div>
  );
}

export default JSXbasics;

