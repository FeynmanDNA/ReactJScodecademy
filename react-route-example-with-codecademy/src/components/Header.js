import React from 'react';
import logo from '../images/logo.svg';
import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Codecademy ReactJS Tutorials</h1>
        </header>
      </div>
    );
  }
}

export default Header; //use default export
