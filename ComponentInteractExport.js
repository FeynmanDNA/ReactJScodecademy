import React from 'react';

//"named exports." 
//When you use named exports, you always need to 
//wrap your imported names in curly braces, such as:
//import { faveManifestos, alsoRan } from './Manifestos';

/* place the keyword export immediately before something that 
you want to export. That something can be any top-level 
var, let, const, function, or class
*/
export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
