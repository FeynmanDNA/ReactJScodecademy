import React from 'react';
import {Link} from 'react-router-dom';

//this creates links that can be navigate
//between routes
class ExamplesList extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/JSX'>JSX</Link></li>
          <li><Link to='/props'>Props</Link></li>
          <li><Link to='/state'>State</Link></li>
          <li><Link to='/Container'>Container</Link></li>
          <li><Link to='/ReactForm'>React Form</Link></li>
          <li><Link to='/LifecycleMethods'>Lifecycle Methods</Link></li>
        </ul>
      </nav>
    );
  }
}

export default ExamplesList;
