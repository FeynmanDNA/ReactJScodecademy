import React from 'react';
import ReactDOM from 'react-dom';

/*Whenever a component mounts, componentWillMount is called first, followed by render, followed by componentDidMount
 */
export class Flashy extends React.Component {
  //You can call this.setState from within componentWillMount
  componentWillMount() {
    alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }
  //You want something to happen right after the very first rendering... 
  //that's exactly what componentDidMount is for! 
  componentDidMount() {
    alert('YOU JUST WITNESSED THE DEBUT OF...  FLASHY!!!!!!!');
  }

  render() {
    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);
