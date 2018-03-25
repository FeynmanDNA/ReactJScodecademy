import React from 'react';
import JSXCoinToss from './JSXCoinToss';

class CoinOutCome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      alt: ''
    }
  }

  handleTossResult = (TossResult) => {
    this.setState({
      src: TossResult,
      alt: TossResult
    });
  }

  render() {
    return (
      <div>
        <h1>Coin toss outcome is:</h1>
        <JSXCoinToss getTossResult={this.handleTossResult} />
        <img src={this.state.src} alt={this.state.alt} />
        <p>Call a function that randomly return either heads or tails.</p>
        <p>Math.random() &lt; 0.5 ? 'heads' : 'tails'</p>
      </div>
    );
  }
}

export default CoinOutCome;
