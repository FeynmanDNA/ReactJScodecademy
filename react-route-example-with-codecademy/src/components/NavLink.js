import React from 'react';
import { Link } from 'react-router-dom';

//this creates links that can be navigate
//between routes
class NavLink extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Home</Link></li>
        </ul>
      </nav>
    );
  }
}

export default NavLink;
