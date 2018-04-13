import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { ProjectForm } from '../Util';
import { Header, Profile } from '../Layouts';

const styles = {
  fontFamily: 'Roboto, sans-serif',
};

class Body extends Component {
  render() {
    return (
      <div className="Body" style={styles}>
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={Profile} />
            <Route path="/project-form" component={ProjectForm} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Body;
