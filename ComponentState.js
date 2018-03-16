import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // constructor method begins here:
  //give the constructor method a single parameter, props
  constructor(props) {
    //React components always have to call super 
    //in their constructors to be set up properly.
    super(props);
    //this.state is an object
    this.state = { title: 'Best App' };
  }

  render() {
    //read your state's "title" property.
    //use the expression this.state.name-of-property
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
