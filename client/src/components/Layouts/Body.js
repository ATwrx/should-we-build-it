import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container, Grid} from 'semantic-ui-react';

import {ProjectForm, NavMenu, Projects} from '../Util';
import {TitleBar, Profile} from '../Layouts';

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
                <Route path="/" exact component={Projects} />
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
