import React from 'react';
import Header from './Header';
import Home from './Home';
import NavLink from './NavLink';
import Schedule from './Schedule';
import {Switch,Route,Link} from 'react-router-dom';
import '../css/body.css'; // Tell Webpack to use this file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPage: "home",
    };
  }

  render() {
    //Uses Switch and Route to link the multiple pages
    //Note: must use EXACT path for home page,
    //otherwise will only render Homepage
    return (
      <div>
        <Header />
        <div className="container">
          <Link to='/'>Home</Link> / this.state.CurrentPage is {this.state.CurrentPage}
          <Switch>
            <Route exact path='/' render={props => (
              <div>
                <Home />
                <NavLink />
              </div>
            )} />
            <Route exact path='/schedule' component={Schedule} />
            <Route path='/test' render={() => <h1>test route function</h1>} />
            <Route render={() => <h1>Page not found</h1>} />
            <Route />
            <Route />
            <Route />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
