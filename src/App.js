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
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Styles = styled.div`

  .welcome {
    width: 100%;
    height:100%;
    boder: 3px solid #ccc;
    padding: 50px;
    margin: 0;
  }
  .css-selector {
    background: linear-gradient(311deg, #26d6a9, #55c3d2, #476296, #479096);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 59s ease infinite;
    -moz-animation: AnimationName 59s ease infinite;
    animation: AnimationName 59s ease infinite;
  }

  @-webkit-keyframes AnimationName {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@-moz-keyframes AnimationName {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}
@keyframes AnimationName {
    0%{background-position:5% 0%}
    50%{background-position:96% 100%}
    100%{background-position:5% 0%}
}

`;

class App extends Component{
  render() {
    return (
      <Styles>
      <div className="css-selector body">
      <React.Fragment>
        <NavigationBar />
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
      </div>
      </Styles>
    )
  }
}
export default App;
