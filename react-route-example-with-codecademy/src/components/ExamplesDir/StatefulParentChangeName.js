import React from 'react';
import { ChangeNameChild } from './StatelessChildChangeName';
import { ChangeNameSibling } from './StatelessSiblingChangeName';

class ChangeName extends React.Component {
  constructor(props) {
    super(props);
    //default name set to JavaScript by this.state
    this.state = { name: 'JavaScript' };

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
    return (
      <div>
        <ChangeNameChild ReceiveChange={this.changeName} /> 
        <ChangeNameSibling dropDownName={this.state.name} />
        <ol>
          <li>Define an Event Handler: To make a child component update its parent's `state`, the first step is something that you've seen before: you must define a state-changing method on the parent.(changeName will setState)</li>
          <li>Pass the Event Handler: Now Parent must pass this function down to Child, so that Child can use it in an event listener.(ReceiveChange=this.changeName)</li>
          <li>Receive the Event Handler: You just passed a function down to Child that can change Parent's state!(onChange=this.respondChange=this.props.ReceiveChange(e.target.value), this.state.name=this.props.dropDownName)</li>
         <li>Then stateful Parent passes down its state to a different stateless component Sibling</li>
         <li>Stateless component Sibling receives the state and displays it.</li>
        </ol>
      </div>
    );
  }
}

export default ChangeName;
