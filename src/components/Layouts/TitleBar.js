import React, {Component} from 'react'; //eslint-disable-next-line
import {Container, Menu} from 'semantic-ui-react';
import {NavLink, Link} from 'react-router-dom'; //eslint-disable-next-line
import {NavLoginButton} from '../Util'
          // <NavLoginButton />

class TitleBar extends Component {
  render() {
    return (
      <Menu fluid pointing>
        <Menu.Item as={Link} to="/" header color="blue">
          Should We Build It?
        </Menu.Item>

        <Menu.Item as={NavLink} to="/explore">
          Explore
        </Menu.Item>

        <Menu.Item as={NavLink} to="/drafts">
          Add Project
        </Menu.Item>

        <Menu.Item as={NavLink} to="/profile">
          Profile
        </Menu.Item>
        
        <Menu.Menu position='right'>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TitleBar;
