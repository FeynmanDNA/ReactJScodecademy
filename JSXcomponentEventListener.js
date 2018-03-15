import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
    //scream() function calls alert() function
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
    //the reason you pass in this.scream to the handler and not this.scream()
    //is that the handler needs a function object,
    //not the result of the function - the hander will call the
    //function when the right time comes (click)
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('app')
);
