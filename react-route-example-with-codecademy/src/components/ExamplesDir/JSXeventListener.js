import React from 'react';
import heads from '../../images/heads.jpg';
import tails from '../../images/tails.jpg';

function handleClick(e) {
  e.target.setAttribute('src', tails);
  e.target.setAttribute('alt', tails);
}

//Note that in HTML, event listener names are written in all lowercase
//such as onclick or onmouseover. 
//In JSX, event listener names are written in camelCase
//such as onClick or onMouseOver.
class change2Tails extends React.Component {
  render() {
    return (
      <div>
        <h1>Click the picture to change from Heads to Tails</h1>
        <p>Without involving state, this is calling a function handleClick(e) and its e.target.setAttribute(src, tails)</p>
        <img onClick={handleClick} src={heads} alt={heads} />
      </div>
    );
  }
}

export default change2Tails;
