import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import {Query} from 'react-apollo';

import {ME_QUERY} from '../Constants/queries';

const updateCache = (cache, data) => {
  data = cache.readQuery({query: ME_QUERY})
  console.log(data,cache)
}
class NavLoginButton extends Component {

  render() {
    return (
      <Query query={ME_QUERY} update={updateCache}>
        {({error, loading, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error: ${error.message}`;
          return (
            <Menu.Item as={NavLink} to="/login">
              {data.name}
            </Menu.Item>
          );
        }}
      </Query>
    );
  }
}
export default NavLoginButton;
// <Menu.Item as={NavLink} to='/login'>
//           {' '}
//           Login
//         </Menu.Item>
