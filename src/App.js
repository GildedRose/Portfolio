import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { NoMatch } from './NoMatch';

import { NavigationBar } from './components/NavBar';
import { Footer } from './components/Footer';



class App extends Component{
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="#about" component={About} />
              <Route path="#portfolio" component={Portfolio} />
              <Route path="#resume" component={Resume} />
              <Route path="#contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>

        <Footer />
      </React.Fragment>
    )
  }
}
export default App;
