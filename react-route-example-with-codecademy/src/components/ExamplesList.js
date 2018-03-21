import React from 'react';
import {Link} from 'react-router-dom';

//this creates links that can be navigate
//between routes
class ExamplesList extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/JSXconditionals'>JSX Conditionals</Link></li>
          <li><Link to='/props'>Props</Link></li>
        </ul>
      </nav>
    );
  }
}

export default ExamplesList;
