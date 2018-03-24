import React from 'react';

export class ChangeNameSibling extends React.Component {
  render() {
    const displayName = this.props.dropDownName;
    return (
      <div>
        <h1>
          {displayName} is an awesome language.
        </h1>
        <h3>So glad you picked {displayName} man.</h3>
      </div>
    );
  }
}
