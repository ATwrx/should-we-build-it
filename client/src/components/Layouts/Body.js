import React, { Component } from 'react';
import { ProjectForm } from '../Util'

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
    };
  };

  handleChange = (event, tabValue) => {
    this.setState({tabValue: tabValue});
  };

  render() {
    return (
        <ProjectForm />
    );
  }
}

export default Body;
