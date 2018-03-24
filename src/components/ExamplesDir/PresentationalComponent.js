//This is going to be your presentational component class. 
//That means that its only job will be to render HTML-like JSX.
//a presentational component will always get 
//rendered by a container component.
import React from 'react';

export class GuineaPigs extends React.Component {
  render() {
    const src = this.props.src;
    return (
      <div>
        <h1>Separating Container Components from Presentational Components</h1>
        <p>If a component has to have <u>state</u>, make calculations based on <u>props</u>, or manage any other complex logic, then that component shouldn't also have to render HTML-like JSX.</p>
        <p>Instead of rendering HTML-like JSX, the component should <b>render another component</b>. It should be <b>that component</b>'s job to render HTML-like JSX.</p>
        <hr />
        <p>return &lt;GuineaPigs src=src /&gt;</p>
        <p>And Presentational Component GuineaPigs only need to render()</p>

        <h1>Cute Guinea Pigs</h1>
        <img src={src} alt="GuineaPigsPics" />
      </div>
    );
  }
}
