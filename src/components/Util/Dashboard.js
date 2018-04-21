import React, {Component} from 'react';
import {Loader} from 'semantic-ui-react';

class Dashboard extends Component {
  render(){
    return (
      <Loader active>A dashboard will load if you wait long enough...</Loader> 
    )
  }
}

export default Dashboard;
