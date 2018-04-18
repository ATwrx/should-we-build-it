import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import {ProjectForm, NavMenu, ProjectFeed} from '../Util';
import {TitleBar, Profile} from '../Layouts';


class Body extends Component {
  state = {
    activeItem: '',
  };

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    return (
      <Router>
        <Container >
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
                <Route path="/" exact component={ProjectFeed} />
                <Route path="/add-project" component={ProjectForm} />
                <Route path="/profile" component={Profile} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default Body;
