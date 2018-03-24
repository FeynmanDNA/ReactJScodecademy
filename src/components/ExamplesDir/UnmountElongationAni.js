import React from 'react';
import Elongation from './UnmountElongationButton';

class ForElongation extends React.Component {
  constructor(props) {
    super(props);
    // initial state is not elongation
    this.state = {
      ToElongate: false,
      animationText: ''
    }

    this.toggleElongation = this.toggleElongation.bind(this);
  }

  // toggle whether to elongate
  toggleElongation() {
    this.setState({
      ToElongate: !this.state.ToElongate  
    });
  }

  // elongation animation
  elongate = () => {
    let newText = this.state.animationText + '-';
    this.setState({
      animationText: newText
    });
  }

  render() {
    // decide the logic for the button that
    // trigger Elongation Component if toggled
    let button;
    if (this.state.ToElongate) {
      button = (<Elongation triggerStop={this.toggleElongation}
                            triggerElongation= {this.elongate} />);
    } else {
      button = <button onClick={this.toggleElongation}>Elongate</button>;
    }

    return (
      <div>
        <h1>Click to Elongate</h1>
        <p>-{this.state.animationText} triggerElongation()</p>
        {button}
        <p>setInterval(() => this.props.triggerElongation(); 100)</p>
        <p>triggerElongation= this.elongate</p>
        <p>elongate = () => this.state.animationText + '-'</p>
        <p>this.setState(animationText:newText)</p>
      </div>
    );
  }
}

export default ForElongation;
