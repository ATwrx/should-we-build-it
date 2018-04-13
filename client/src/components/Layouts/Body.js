import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
  Container,
  Grid,
} from 'semantic-ui-react';

import {ProjectForm, Projects} from '../Util';
import {NavBar, NavMenu, Profile} from '../Layouts';

const styles = {
  fontFamily: 'Roboto, sans-serif',
};

class Body extends Component {
  state = {
     activeItem: 'home',  
  }
  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {
    return (
      <Container fluid style={styles}>
        <NavBar />
        <Grid>
          <Grid.Column width={4}>
            <NavMenu handleItemClick={this.handleItemClick} activeItem={this.state.activeItem} />
          </Grid.Column>
          <Grid.Column stretch="true" width={12}>
          <Router>
            <Switch>
              <Route path="/" exact component={Profile} />
              <Route path="/add-project" component={ProjectForm} />
              <Route path="/project/:id" component={Projects} />
            </Switch>
          </Router>
          </Grid.Column>
        </Grid>
        </Container>
    );
  }
}

export default Body;
