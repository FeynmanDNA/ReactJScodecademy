import React from 'react';

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
        <b>{titleText}</b>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

/*this.props.children would return everything 
 * in between <MyComponentClass> and </MyComponentClass>
 */

class InstanceChildren extends React.Component {
  render() {
    return (
      <div>
        <p>if (this.props.children instanceof Array), then titleText += 's';</p>
        <List type='Book'>
          <li>Book</li>
        </List>
        <List type='Book'>
          <li>Book</li>
          <li>Book</li>
          <li>Book</li>
        </List>
        <List type='School'>
          <li>School</li>
          <li>School</li>
        </List>
        <List type='School'>
          <li>School</li>
        </List>
      </div>
    );
  }
}

export default InstanceChildren;
