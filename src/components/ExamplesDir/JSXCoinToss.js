import React from 'react';
import heads from '../../images/heads.jpg';
import tails from '../../images/tails.jpg';

class JSXCoinToss extends React.Component {
  TossCoin = () => {
    const randomNum = Math.random() < 0.5 ? 'heads' : 'tails';
    //Parenthesis () to surround conditional statements
    const outPut = (randomNum === 'heads' ? heads : tails);
    this.props.getTossResult(outPut);
  }

  render() {
    return (
      <button onClick={this.TossCoin}>
        Click to Toss Coin, as many times as you like!
      </button>
    );
  }
}

export default JSXCoinToss;


