import React from 'react';
import Header from './Header';
import Home from './Home';
import NavLink from './NavLink';
import '../css/body.css';

const App = () => (
  <div>
    <Header />
    <div className="container">
      <Home />
      <NavLink />
    </div>
  </div>
);

export default App;
