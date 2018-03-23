//GuineaPigsContainer contains a lot of logic. 
//It shouldn't also have to render HTML-like JSX
import React from 'react';
import { GuineaPigs } from './PresentationalComponent';

const GUINEAPATHS = [
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg',
  'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'
];

class GuineaPigsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentGP: 0 };

    this.interval = null;

    this.nextGP = this.nextGP.bind(this);
  }

  nextGP() {
    let current = this.state.currentGP;
    let next = ++current % GUINEAPATHS.length;
    this.setState({ currentGP: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextGP, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    //Once your container component has chosen 
    //a guinea pig, it must pass that guinea pig 
    //to the presentational component.
    const src =
          GUINEAPATHS[this.state.currentGP];
    return <GuineaPigs src={src}/>;
  }
}

export default GuineaPigsContainer;
