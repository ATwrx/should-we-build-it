import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import {ProjectForm, Projects} from '../Util';
import {NavBar, NavMenu, Profile} from '../Layouts';

const styles = {
  fontFamily: 'Roboto, sans-serif',
};

class Body extends Component {
  state = {
    activeItem: '',
  };
  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    return (
      <Router>
        <Container fluid style={styles}>
          <NavBar />
          <Grid>
            <Grid.Column width={3}>
              <NavMenu
                handleItemClick={this.handleItemClick}
                activeItem={this.state.activeItem}
              />
            </Grid.Column>
            <Grid.Column stretch="true" width={12}>
              <Switch>
                <Route path="/" exact component={Projects} />
                <Route path="/add-project" component={ProjectForm} />
                <Route path="/projects" component={Profile} />
              </Switch>
            </Grid.Column>
          </Grid>
        </Container>
      </Router>
    );
  }
}

export default Body;
