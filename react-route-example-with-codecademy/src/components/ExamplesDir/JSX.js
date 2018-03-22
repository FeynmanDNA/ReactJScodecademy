import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import CoinOutCome from './JSXconditionalWithIf';
import change2Tails from './JSXeventListener';

class JSXbasics extends React.Component {
  render() {
    return (
      <div>
        <h1>JSX conditionals and event-listener examples.</h1>
        <p>JSX itself cannot have logic controls, but we can always make use of logical conditionals like with if-statements and '&&' to solve problems.</p> 
        <p>In JSX's HTML-like elements, event listener names are written in camelCase, like onClick.</p> 
        <ul>
          <li><Link to='/JSX/Cointoss'>Cointoss</Link></li>
          <li><Link to='/JSX/ChangeTails'>ChangeTails</Link></li>
        </ul>
        <hr />
        <Switch>
          <Route exact path='/JSX/Cointoss' 
                 component={CoinOutCome} />
          <Route exact path='/JSX/ChangeTails'
                 component={change2Tails} />
        </Switch>
      </div>
    );
  }
}

export default JSXbasics;

