import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import {ProjectForm, ProjectFeed, Dashboard} from './components/Util';
import {TitleBar, Profile, ProjectItem, Welcome} from './components/Layouts';

class App extends Component {
  state = {
    isUser: true,
  };

  render() {
    return (
      <Router>
        <Container fluid>
              <TitleBar />
              <Container style={{padding: '5em 0em'}}>
              <Switch >
                <Route path="/welcome" component={Welcome} />
                <Route path="/explore" component={ProjectFeed} />
                <Route path="/add-project" component={ProjectForm} />
                <Route path="/profile:id" component={Profile} />
                <Route path="/project:id" component={ProjectItem} />
                <Route component={this.state.isUser ? Dashboard : Welcome} />

              </Switch>
            </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
