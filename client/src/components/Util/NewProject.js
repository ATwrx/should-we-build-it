import React, {Component} from 'react';
import {ProjectForm} from '../Util';

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: [],
    };
  }

  handleAddProject = project => {
    this.setState({newProject: project});
    // TODO: Push project to server
    this.props.projects.push(project);
  };

  render() {
    return (
      <ProjectForm
        projects={this.props.projects}
        addProject={this.handleAddProject.bind(this)}
      />
    );
  }
}
export default NewProject;
