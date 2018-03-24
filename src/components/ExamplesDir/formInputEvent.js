import React from 'react';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state
    this.state = {userInput: ''};
    this.handleUserInput = this.handleUserInput.bind(this);    
  }
  
  handleUserInput(e) {
    this.setState({ userInput: e.target.value });
  }
  
  render() {
    const userInput = this.state.userInput;
    return (
      <div>
        <h1>React Form</h1>
        <p>In a React form, you want the server to know about every new character or deletion, as soon as it happens. That way, your screen will always be in sync with the rest of your application. Give input an <b>onChange</b> attribute. Set <b>onChange</b>'s value equal to <b>this.handleUserInput</b>.</p>
        <p>Before Component's render function, write a new method named <b>handleUserInput</b>.</p>
        <p>Give this method one parameter, named <b>e</b>.</p>
        <p>Inside of this function's body, call <b>this.setState</b>. Set the <b>state</b>'s <b>userInput</b> property equal to <b>e.target.value</b>.</p>
        <p><b>e.target.value</b> will equal the text in the input field. You are setting <b>this.state.userInput</b> equal to whatever text is currently in input field.</p>
        <h2>Input field:</h2>
        <input type="text" 
               onChange={this.handleUserInput} />
        <h1>The input you keyed in is: {userInput}</h1>
      </div>
    );
  }
}

export default FormInput;
