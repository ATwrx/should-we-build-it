import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from 'material-ui/CssBaseline';

import {ProjectForm} from '../Util';
import {HeaderWrapped} from '../Layouts';

const styles = {
  fontFamily: 'Roboto, sans-serif',
};

class Body extends Component {
  render() {
    return (
      <div className="Body" style={styles}>
        <CssBaseline />
        <HeaderWrapped />
        <Router>
          <Switch>
            <Route path="/" exact component={ProjectForm} />
            <Route path="profile/:user" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Body;
