import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental1 = Math.random() < 0.5;
const judgmental2 = Math.random() < 0.5;
const judgmental3 = Math.random() < 0.5;
const judgmental4 = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      {!judgmental1 && <li>Sushi Burrito</li>}
      {!judgmental2 && <li>Rhubarb Pie</li>}
      {!judgmental3 && <li>Nacho Cheez Straight Out The Jar</li>}
      {!judgmental4 && <li>Broiled Grapefruit</li>}
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
