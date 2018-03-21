import React from 'react';
import heads from '../../images/heads.jpg';
import tails from '../../images/tails.jpg';

function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

//Parenthesis () to surround conditional statements
const outPut = (coinToss() === 'heads' ? heads : tails);

class CoinOutCome extends React.Component {
  render() {
    return (
      <div>
        <h1>Coin toss outcome is:</h1>
        <img src={outPut} alt={outPut} />
      </div>
    );
  }
}

export default CoinOutCome;
