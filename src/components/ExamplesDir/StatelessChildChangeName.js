import React from 'react';

export class ChangeNameChild extends React.Component {
  constructor(props) {
    super(props);
    //bind respondChange() to the current value of this
    this.respondChange = this.respondChange.bind(this);
  }

  //the child receives the passed-down function
  //and uses it as an event handler
  //accessed here as this.props.ReceiveChange
  //process the event object
  respondChange(e) {
    //target.value refers to the <select> tag
    this.props.ReceiveChange(e.target.value);
  }

  render() {
    return (
      //In order to make the dropdown menu change the 
      //<h1></h1>, you will need the dropdown menu to 
      //change the value of this.props.name
      <div>
        <select id="language-names" onChange={this.respondChange}>
          <option value="JavaScript">
            JavaScript
          </option>

          <option value="Python">
            Python
          </option>

          <option value="C">
            C
          </option>
        </select>
      </div>
    );
  }
}

