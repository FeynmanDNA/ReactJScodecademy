/* Import ReactJS */
import React from 'react';

/* Import Components */
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import ExamplesList from './ExamplesList';
import JSXbasics from './ExamplesDir/JSX';
import propsBasics from './ExamplesDir/props';
import stateBasics from './ExamplesDir/state';
import GuineaPigsContainer from './ExamplesDir/ConatinerComponent';
import FormInput from './ExamplesDir/formInputEvent';
import LifecycleMethods from './ExamplesDir/LifecycleMethods';

/* Import from react-router-dom */
import {Switch,Route} from 'react-router-dom';

/* icd2k3 BreadCrumbs */
import Breadcrumbs from './icd2k3Breadcrumbs';

/* Import files */
import '../css/body.css'; // Tell Webpack to use this file

class App extends React.Component {
  render() {
    //Uses Switch and Route to link the multiple pages
    //Note: must use EXACT path for home page,
    //otherwise will only render Homepage
    return (
      <div>
        <Header />
        <div className="container">
          <Breadcrumbs />
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} render={props => (
              <div>
                <Home />
                <ExamplesList />
              </div>
            )} />
            <Route path='/JSX' component={JSXbasics} />
            <Route path='/props' component={propsBasics} />
            <Route path='/state' component={stateBasics} />
            <Route path='/Container' component={GuineaPigsContainer} />
            <Route path='/ReactForm' component={FormInput} />
            <Route path='/LifecycleMethods' component={LifecycleMethods} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
