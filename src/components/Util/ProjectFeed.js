import React, {Component, Fragment} from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ProjectLink } from '../Layouts/';

export default class ProjectFeed extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ data, loading, error, refetch }) => {
          if (loading) {
            return (
              <div >
                <div>Loading ...</div>
              </div>
            )
          }

          if (error) {
            return (
              <div >
                <div>An unexpected error occured.</div>
              </div>
            )
          }

          return (
            <Fragment>
              <h1>Feed</h1>
              {data.projects &&
                data.projects.map(project => (
                  <ProjectLink
                    key={project.id}
                    project={project}
                    refresh={() => refetch()}
                    isDraft={!project.isPublished}
                  />
                ))}
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
  query FeedQuery {
    projects {
      id
      createdAt
      updatedAt
      isPublished
      title
      description
      text
      upVotes
      downVotes
      owner {
        id
        name
      }
    }
  }
 `
