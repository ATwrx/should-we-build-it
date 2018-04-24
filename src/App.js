import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import {Dashboard, ProjectFeed, Drafts, ProjectForm} from './components/Util';
import {TitleBar, Welcome, Profile, ProjectItem, } from './components/Layouts';

class App extends Component {
  state = {
    isUser: false,
  };

  render() {
    return (
      <Router>
        <Container fluid>
              <TitleBar />
              <Container style={{padding: '5em 0em'}}>
              <Switch >
                {/* <Route path="/" component={Welcome} /> */}
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
