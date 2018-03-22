import React from 'react';
import Header from './Header';
import Home from './Home';
import ExamplesList from './ExamplesList';
import JSXbasics from './ExamplesDir/JSX';
import propsBasics from './ExamplesDir/props';
import stateBasics from './ExamplesDir/state';
import {Switch,Route,Link} from 'react-router-dom';
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
          <Link to='/'>BreadCrumb goes here</Link>
          <Switch>
            <Route exact path='/' render={props => (
              <div>
                <Home />
                <ExamplesList />
              </div>
            )} />
            <Route path='/JSX' component={JSXbasics} />
            <Route path='/props' component={propsBasics} />
            <Route path='/state' component={stateBasics} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
