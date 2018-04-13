import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';

class NavMenu extends Component {
  render() {
    const {activeItem, handleItemClick} = this.props;

    return (
      <Menu fluid vertical secondary>
        <NavLink to="/">
          <Menu.Item
            name="explore"
            active={activeItem === 'explore'}
            onClick={handleItemClick}>
            Explore
          </Menu.Item>
        </NavLink>

        <NavLink to="/add-project">
          <Menu.Item
            name="projects"
            active={activeItem === 'projects'}
            onClick={handleItemClick}>
            Add Project
          </Menu.Item>
        </NavLink>

        <NavLink to="/profile">
          <Menu.Item
            name="profile"
            active={activeItem === 'profile'}
            onClick={handleItemClick}>
            {' '}
            Profile
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}

export default NavMenu;
