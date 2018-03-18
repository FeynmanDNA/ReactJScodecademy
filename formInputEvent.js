import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {userInput: 'h1'};
    this.handleUserInput = this.handleUserInput.bind(this);    
  }
  
  handleUserInput(e) {
    this.setState(
      {userInput: e.target.value}
    )
  }
  
  render() {
    const userInput = this.state.userInput;
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleUserInput} />
        <h1>I am an {userInput}.</h1>
      </div>
    );
  }
}

let input = document.querySelector('input[type="text"]');

let typedText = input.value; // input.value will be equal to whatever text is currently in the text box.

/*The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.
 */

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);
