import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import CoinOutCome from './JSXconditionalWithIf';
import change2Tails from './JSXeventListener';

class JSXconditionals extends React.Component {
  render() {
    return (
      <div>
        <h1>These are JSX conditionals examples.</h1>
        <p>JSX itself cannot have logic controls, but we can always make use of logical conditionals like with if-statements and '&&' to solve problems.</p> 
        <Link to='/JSXconditionals/Cointoss'>Cointoss</Link>
        <Link to='/JSXconditionals/ChangeTails'>ChangeTails</Link>
        <Switch>
          <Route exact path='/JSXconditionals/Cointoss' 
                 component={CoinOutCome} />
          <Route exact path='/JSXconditionals/ChangeTails'
                 component={change2Tails} />
        </Switch>
      </div>
    );
  }
}

export default JSXconditionals;

