import React, {Component} from 'react';
import { Query } from 'react-apollo';
import { gql } from 'graphql-tag';
import { ProjectLink } from '../Layouts/';

// const projectQuery = {
//   query: gql`
//     query {
//       allProjects {
//         id
//         title
//         owner {
//           id
//           name
//         }
//         description
//         text
//       }
//     }
//   `,
// };

export default class ProjectFeed extends Component {
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

