import React from 'react';
import {Route,Link} from 'react-router-dom';
import AlertButton from './ComponentPropsEventHandler';
import InstanceChildren from './ComponentPropsChildren';

const propsBasics = ({match}) => {
  return (
    <div>
      <h1>Props</h1>
      <p>Component can pass information to another component. Information that gets passed from one component to another is known as "props", which is an object.</p>
      <ul>
        <li><Link to={`${match.url}/ComponentPropsEventHandler`}>Click Button to Alert</Link></li>
        <li><Link to={`${match.url}/ComponentPropsChildren`}>Auto Pluralize List Titles</Link></li>
      </ul>
      <hr />
      <Route exact path='/props/ComponentPropsEventHandler' 
               component={AlertButton} />
      <Route exact path='/props/ComponentPropsChildren' 
               component={InstanceChildren} />
    </div>
  );
}

export default propsBasics;
