import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Portfolio } from './Portfolio';
import { Contact } from './Contact';
import { Resume } from './Resume';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layouts';
import { NavigationBar } from './components/NavBar';
import { Jumbotron } from './components/Jumbotron';
import { Footer } from './components/Footer';

class App extends Component{
  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/resume" compontent={Resume} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;
