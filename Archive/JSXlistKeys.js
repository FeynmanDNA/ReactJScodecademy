import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

//.map() is going to loop over
//get .map() to produce a unique key, each time it loops
const peopleLis = people.map((person,i) =>
  // expression goes here:
  <li key={"person_" + i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
  <ul>{peopleLis}</ul>,
  document.getElementById('app')
);
