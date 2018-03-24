import React from 'react';
import {Route,Link} from 'react-router-dom';
import Toggle from './ComponentStateSetState';
import AddClick from './StatefulParentAddClick';
import ChangeName from './StatefulParentChangeName';

class stateBasics extends React.Component {
  render() {
    return (
      <div>
        <h1>State</h1>
        <p>A React app is basically just a lot of components, setting state and passing props to one another.</p>
        <p>Component can change its state by calling this.setState(), but should NEVER update its own props. The stateless, child component will update the state of the stateful parent component.</p>
        <ul>
          <li><Link to='/state/ComponentStateSetState'>Toggle Color with setState</Link></li>
          <li><Link to='/state/StatefulParentAddClick'>Click button to increment</Link></li>
          <li><Link to='/state/StatefulParentChangeName'>Dropdown Menu Change Name</Link></li>
        </ul>
        <hr />
        <Route exact path='/state/ComponentStateSetState' 
                 component={Toggle} />
        <Route exact path='/state/StatefulParentAddClick' 
                 component={AddClick} />
        <Route exact path='/state/StatefulParentChangeName' 
                 component={ChangeName} />
      </div>
    );
  }
}

export default stateBasics;

