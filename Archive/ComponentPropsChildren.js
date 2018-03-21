import React from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    //this.props.children will return everything 
    //in between a component's opening and closing JSX tags.
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

/*this.props.children would return everything 
 * in between <MyComponentClass> and </MyComponentClass>
 */

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
          <h1>lala TEST</h1>
        </List>
        <List type='Living Musician'>
          <li>Test props children array</li>
          123
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
