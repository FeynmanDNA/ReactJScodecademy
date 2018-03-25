import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <hr />
        <small>
        <p>Code examples are grouped using <b>React-route-dom v4</b> in a multi-page ReactJS app, as taught in this awesome Medium.com <a href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf" target="_blank" rel="noopener noreferrer">article</a> and this even better Sitepoint.com <a href="https://www.sitepoint.com/react-router-v4-complete-guide" target="_blank" rel="noopener noreferrer">article</a>.</p>
        <p>Breadcrumbs feature above comes from <a href="https://github.com/icd2k3/react-router-breadcrumbs-hoc" target="_blank" rel="noopener noreferrer">icd2k3/react-router-breadcrumbs-hoc</a>.</p>
        <p style={{textAlign:"center"}}><i>--Written in 2018 March, FeynmanDNA--</i></p>
        </small>
      </div>
    );
  }
}

export default Footer;
