import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';

class JSXconditionals extends React.Component {
  render() {
    return (
      <div>
        <h1>These are JSX conditionals examples.</h1>
        <p>JSX itself cannot have logic controls, but we can always make use of logical conditionals like with if-statements and '&&' to solve problems.</p> 
        <Link to='/JSXconditionals/example1'>Example1</Link>
        <Link to='/example2'>Example2</Link>
        <Switch>
          <Route exact path='/JSXconditionals/example1' 
                 render={() => <p>Example1 here</p>} />
          <Route exact path='/example2'
                 render={() => <p>Example2 here!</p>} />
        </Switch>
      </div>
    );
  }
}

export default JSXconditionals;

