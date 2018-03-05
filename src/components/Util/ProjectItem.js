import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div className="ProjectItem">
      <strong>Title :</strong> {this.props.project.title}: 
      <br />
      <strong>Language : </strong>{this.props.project.lang}
      <br />
      <strong>Category : </strong>{this.props.project.category}
      <br />
      <hr />
      </div>
    );
  }
}

export default ProjectItem;
