import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// give the Button component class a defaultProps property
Button.defaultProps = {
  text:'make this property an object'
};

//if text attribute is specified on the spot, it will override
ReactDOM.render(
  <Button text="local override" />, 
  document.getElementById('app')
);
