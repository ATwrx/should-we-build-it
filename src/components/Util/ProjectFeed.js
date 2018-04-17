import React, { Component } from "react";
import ProjectItem from "../Layouts/ProjectItem";

class ProjectFeed extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="ProjectFeed">
        {projectItems}
      </div>
    );
  }
}

export default ProjectFeed;
