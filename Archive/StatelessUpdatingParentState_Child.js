import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    //bind respondChange() to the current value of this
    this.respondChange = this.respondChange.bind(this);
  }
  
  //the child receives the passed-down function
  //and uses it as an event handler
  //accessed here as this.props.onChange

  //process the event object
  respondChange(e) {
    //target.value refers to the <select> tag
    const newName = e.target.value;
    this.props.onChange(newName);
  }
  
  render() {
    return (
      //In order to make the dropdown menu change the 
      //<h1></h1>, you will need the dropdown menu to 
      //change the value of this.props.name
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.respondChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
