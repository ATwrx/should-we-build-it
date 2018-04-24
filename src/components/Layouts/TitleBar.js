import React, {Component} from 'react';
import {Container, Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

class TitleBar extends Component {
  render() {
    return (
      <Menu fluid>
        <Menu.Item as={NavLink} to="/" header color="blue">
          Should We Build It?
        </Menu.Item>

        <Menu.Item as={NavLink} to="/explore">
          Explore
        </Menu.Item>

        <Menu.Item as={NavLink} to="/add-project">
          Add Project
        </Menu.Item>

        <Menu.Item as={NavLink} to="/profile">
          Profile
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/login">
            {' '}
            Login
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default TitleBar;
