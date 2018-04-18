import React, {Component} from 'react';
import ProjectLink from '../Layouts/ProjectLink';

class ProjectFeed extends Component {
  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return <ProjectLink key={project.title} project={project} />;
      });
    }
    return {projectItems};
  }
}

export default ProjectFeed;
