import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import {Header, Loader} from 'semantic-ui-react';

import {ProjectLink, } from '../Layouts/';
import {FEED_QUERY} from '../Constants/queries'

export default class ProjectPage extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({data, loading, error, refetch}) => {
          if (loading) {
            return (
              <div>
                <Loader>Loading ...</Loader>
              </div>
            );
          }
          if (error) {
            return (
              <div>
                <div>An unexpected error occured.</div>
              </div>
            );
          }
          return (
            <Fragment>
              <Header as="h1" content="Project Feed" />
              {data.feed &&
                data.feed.map(project => (
                  <ProjectLink
                    key={project.id}
                    project={project}
                    refresh={() => refetch()}
                    isDraft={!project.isPublished}
                  />
                ))}
              {this.props.children}
            </Fragment>
          );
        }}
      </Query>
    );
  }
}
