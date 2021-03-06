import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBarMenu from './navBarMenu';
import Main from '../containers/main';

const About = (props) => {
  return <div> All there is to know about me </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBarMenu />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
