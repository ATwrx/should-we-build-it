import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class NavMenu extends Component {
  render() {
    const { activeItem, handleItemClick } =  this.props;
    return (
      <Menu fluid vertical secondary >
        <Menu.Item
          name="profile"
          active={activeItem === 'profile'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="projects"
          active={activeItem === 'projects'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="explore"
          active={activeItem === 'explore'}
          onClick={handleItemClick}
        />
      </Menu>
    );
  }
}

export default NavMenu;
