import React, {Component} from 'react';
import {Header, Container, Divider} from 'semantic-ui-react';

class NavBar extends Component {
  render() {
    return (
      <Container
        textAlign="center"
        fluid >
        <Header as="h1" color="blue" > 
          Should We Build It?
        </Header>
        <Divider section />
      </Container>
    );
  }
}

export default NavBar;
