import React from 'react';
import {Route,Link} from 'react-router-dom';
import AlertMount from './MountingLifecycleMethods';
import Clock from './Clock';
import ForElongation from './UnmountElongationAni';
import { UnmountAlert } from './UnmountAlert';

class LifecycleMethods extends React.Component {
  render() {
    return (
      <div>
        <h1>Lifecycle Methods</h1>
        <p><b>What is a Lifecycle Method?</b></p>
        <p>Lifecycle methods are methods that get called at certain moments in a component’s life. You can write a lifecycle method that gets called right before a component renders for the first time. You can write a lifecycle method that gets called right after a component renders, every time except for the first time.</p>
        <p>There are three categories of lifecycle methods: <b>mounting, updating, and unmounting</b>.</p>
        <ul>
          <li><Link to='/LifecycleMethods/Mounting'>Alert WillMount DidMount</Link></li>
          <li><Link to='/LifecycleMethods/Clock'>Clock in the Header</Link></li>
          <li><Link to='/LifecycleMethods/Unmount'>Component Will Unmount</Link></li>
          <li><Link to='/LifecycleMethods/Elongation'>Elongation Animation</Link></li>
        </ul>
        <hr />
        <Route exact path='/LifecycleMethods/Mounting'
                 component={AlertMount} />
        <Route exact path='/LifecycleMethods/Clock'
                 component={Clock} />
        <Route exact path='/LifecycleMethods/Unmount'
                 component={UnmountAlert} />
        <Route exact path='/LifecycleMethods/Elongation'
                 component={ForElongation} />
      </div>
    );
  }
}

export default LifecycleMethods;

