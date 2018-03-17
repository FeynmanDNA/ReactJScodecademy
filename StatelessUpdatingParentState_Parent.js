import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    //default name set to Frarthur by this.state
    this.state = { name: 'Frarthur' };

    //The parent component binds the newly-defined method to 
    //the current instance of the component in its constructor. 
    //This ensures that when we pass the method to the child component,
    //it will still update the parent component.
    this.changeName = this.changeName.bind(this);
  }

  // calling changeName will 
  // result in a state change:
  changeName(newName) {
    this.setState(
      {name: newName}
    );
  }
  
  //You need Child's dropdown menu to 
  //change Parent's this.state.name
  //That will cause <Child /> to get passed 
  //a new name prop, which will change the name 
  //displayed on the screen.

  // The stateful component class passes down
  // changeName() method to a stateless component class:
  render() {
    return <Child name={this.state.name}
             onChange={this.changeName}  /> 
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);
