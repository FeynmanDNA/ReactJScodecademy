import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>ReactJS-Demos</h1>
        <p>Source code available @ <a href="https://github.com/FeynmanDNA/ReactJScodecademy" target="_blank" rel="noopener noreferrer">github.com/FeynmanDNA/ReactJScodecademy</a></p>
        <hr />
        <b>ReactJS examples as taught in the Codecademy <a href="https://www.codecademy.com/learn/react-101" target="_blank" rel="noopener noreferrer">ReactJS tutorials</a>.</b>
        <p>Code examples are grouped using <b>React-route-dom</b> in a multi-page ReactJS app, as taught in this awesome Medium.com <a href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf" target="_blank" rel="noopener noreferrer">article</a> and this even better Sitepoint.com <a href="https://www.sitepoint.com/react-router-v4-complete-guide" target="_blank" rel="noopener noreferrer">article</a>.</p>
      </div>
    );
  }
}

export default Home;
