import React from 'react';
import {Route,Link} from 'react-router-dom';
import Toggle from './ComponentStateSetState';
import InstanceChildren from './ComponentPropsChildren';

class stateBasics extends React.Component {
  render() {
    return (
      <div>
        <h1>State</h1>
        <p>A React app is basically just a lot of components, setting state and passing props to one another.</p>
        <ul>
          <li><Link to='/state/ComponentStateSetState'>Toggle Color with setState</Link></li>
          <li><Link to='/props/ComponentPropsChildren'>Auto Pluralize List Titles</Link></li>
        </ul>
        <hr />
        <Route exact path='/state/ComponentStateSetState' 
                 component={Toggle} />
        <Route exact path='/props/ComponentPropsChildren' 
                 component={InstanceChildren} />
      </div>
    );
  }
}

export default stateBasics;

