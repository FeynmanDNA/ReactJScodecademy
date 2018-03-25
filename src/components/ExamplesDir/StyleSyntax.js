import React from 'react';

//In regular JS, style values are almost always strings. 
//Even if a style value is numeric 
//In React, if you write a style value as a number, 
//then the unit "px" is assumed.
//use units other than "px," you can use a string
const styles = {
  background: 'lightblue',
  color: 'darkred',
  marginTop: 100,
  fontSize: 50
}

//An inline style can be:
//<h1 style={{ color: 'red' }}>Hello world</h1>
//The outer curly braces inject JavaScript into JSX
//The inner curly braces create a JavaScript object literal. 
//They make this a valid JavaScript object:
//{ color: 'red' }

class styleMe extends React.Component{
  render() {
    return (
      <div>
        <p>
        background: 'lightblue',
        color: 'darkred',
        marginTop: 100,
        fontSize: 50
        </p>
        <h1 style={styles}>RUA!</h1>
      </div>
    );
  }
}

export default styleMe;
