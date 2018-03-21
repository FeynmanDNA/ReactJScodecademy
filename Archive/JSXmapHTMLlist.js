import React from 'react';
import ReactDOM from 'react-dom';

const pets = ['cat', 'dog', 'bear'];

//Arrow functions are a short syntax from ES6
//use them in place of expressions like function (foo) {...}
// Old-school:
//var a2 = a.map(function(s){ return s.length });
// ECMAscript 6 using arrow functions
//var a3 = a.map( s => s.length );
//
const petsList = pets.map(item =>
  // expression goes here:
  <li>{item}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{petsList}</ul>,
  document.getElementById('app')
);
