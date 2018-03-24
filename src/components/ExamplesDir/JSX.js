import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import CoinOutCome from './JSXconditionalWithIf';
import change2Tails from './JSXeventListener';
import styleMe from './StyleSyntax';

class JSXbasics extends React.Component {
  render() {
    return (
      <div>
        <h1>JSX conditionals and event-listener examples.</h1>
        <p>JSX itself cannot have logic controls, but we can always make use of logical conditionals like with if-statements and '&&' to solve problems.</p> 
        <p>In JSX's HTML-like elements, event listener names are written in camelCase, like onClick.</p> 
        <p>And lastly, in JSX you can apply styles like background-color and margin-top, but in CamelCase (backgroundColor and marginTop)</p>
        <ul>
          <li><Link to='/JSX/Cointoss'>Cointoss</Link></li>
          <li><Link to='/JSX/ChangeTails'>ChangeTails</Link></li>
          <li><Link to='/JSX/StyleSyntax'>StyleSyntax</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/JSX/Cointoss' 
                 component={CoinOutCome} />
          <Route exact path='/JSX/ChangeTails'
                 component={change2Tails} />
          <Route exact path='/JSX/StyleSyntax'
                 component={styleMe} />
        </Switch>
      </div>
    );
  }
}

export default JSXbasics;

