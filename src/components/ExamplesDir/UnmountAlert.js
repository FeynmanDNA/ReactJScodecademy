import React from 'react';

export class UnmountAlert extends React.Component {
  componentWillUnmount() {
    alert("componentWillUnmount will be unmounted/removed from the DOM");
  }

  render() {
    return (
    <div>
      <h1>componentWillUnmount</h1>
      <p>is the only unmounting lifecycle method. It happens when the component is removed from the DOM. Use this to cleanup, like clearInterval</p>
      <p>When you leave this page, you will trigger <u>componentWillUnmount</u>'s alert message.</p>
    </div>
    );
  }
}


