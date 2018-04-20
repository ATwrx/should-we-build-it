import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import {ProjectForm, ProjectFeed} from './components/Util';
import {TitleBar, Profile, ProjectItem} from './components/Layouts';

class App extends Component {
  state = {
    isUser: false,
    dashboard: ""
  };

  render() {
    return (
      <Router>
        <Container fluid>
              <TitleBar />
              <Switch >
                <Route path="/explore" component={ProjectFeed} />
                <Route path="/add-project" component={ProjectForm} />
                <Route path="/profile:id" component={Profile} />
                <Route path="/project:id" component={ProjectItem} />
                <Route component={this.state.isUser ? this.state.dashboard : ProjectFeed} />
              </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
