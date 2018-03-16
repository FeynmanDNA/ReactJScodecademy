import React from 'react';
import ReactDOM from 'react-dom';

//Every component has something called props.
//A component's props is an object. 
//It holds information about that component.
class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
// can also pass info to a React component
// values that aren't strings are wrapped in curly braces{}
ReactDOM.render (
  <PropsDisplayer myProp="Hello" />,
  document.getElementById('app')
);
/*<PropsDisplayer />'s props object isn't really empty.
It has some properties that JSON.stringify doesn't detect
*/
