import React from 'react';
import logo from '../images/logo.svg'; // Tell Webpack this JS file uses this image
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Codecademy ReactJS Tutorials</h1>
          <p>This header will never reload (hopefully) thanks to the virtual-DOM technology</p>
        </header>
      </div>
    );
  }
}

export default Header; //use default export
