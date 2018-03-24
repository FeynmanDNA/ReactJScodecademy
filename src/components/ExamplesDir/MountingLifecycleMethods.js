import React from 'react';

class AlertMount extends React.Component {
  componentWillMount() {
    alert("This is componentWillMount's alert(). componentWillMount happens before render");
  }

  componentDidMount() {
    setTimeout(() => {
      alert("After render, setTimeout(alert(),2000) comes componentDidMount");
    }, 2000);
  }

  render() {
    alert("Now it is render's turn. Rendering...");

    return (
      <div>
        <h1 style={{backgroundColor:"cyan"}}>Mounting Lifecycle Methods</h1>
        <p>There are three mounting lifecycle methods: <i>1.componentWillMount 2.render 3.componentDidMount</i>.</p>
        <p>When a component mounts, it automatically calls these three methods, in order.</p>
      </div>
    );
  }
}

export default AlertMount;
