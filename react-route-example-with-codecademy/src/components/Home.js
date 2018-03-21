import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 style={ {color:'blue'} }>These are some of the ReactJS examples taught in the Codecademy tutorial.</h1>
        <p>Code examples are grouped using React-route-dom in a multi-page ReactJS app, as taught in this awesome Medium.com <a href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf" target="_blank" rel="noopener noreferrer">article</a>.</p>
      </div>
    );
  }
}

export default Home;
