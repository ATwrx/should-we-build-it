import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import {ProjectForm, NavMenu, ProjectFeed} from '../Util';
import {TitleBar, Profile, ProjectItem} from '../Layouts';

class Body extends Component {
  state = {
    activeItem: '/',
  };

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    return (
      <Router>
        <Container fluid >
          <TitleBar />
          <Grid>
            <Grid.Column width={3}>
              <NavMenu
                handleItemClick={this.handleItemClick}
                activeItem={this.state.activeItem}
              />
            </Grid.Column>
            <Grid.Column stretch="true" width={12}>
              <Switch>
                <Route path="/" exact component={TitleBar} />
                <Route path="/add-project" component={ProjectForm} />
                <Route path="/profile:id" component={Profile} />
                <Route path="/project:id" component={ProjectItem} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default Body;
