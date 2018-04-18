import React, { Component, Fragment } from "react";
import ProjectItem from "../Layouts/ProjectItem";
import { Query } from 'react-apollo';
import { gql } from 'graphql-tag';

const projectQuery = {
  query: gql`
    query {
      allProjects {
        id
        title
        owner {
          id
          name
        }
        description
        text
      }
    }
  `,
};

export default class ProjectFeed extends Component {
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
      <Fragment>
        {projectItems}
      </Fragment>
    );
  }
}

export const FEED_QUERY = gql`
  query allProjects {

  }
