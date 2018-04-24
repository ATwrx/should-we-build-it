import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import {Header, Loader} from 'semantic-ui-react';
import {ProjectItem} from '../Layouts';

export default class Drafts extends Component {
  render() {
    return (
      <Query query={DRAFTS_QUERY}>
        {({data, loading, error, refetch}) => {
          if (loading) {
            return (
              <Fragment>
                <Loader>Loading ...</Loader>
              </Fragment>
            );
          }

          if (error) {
            return (
              <Fragment>
                <div>An unexpected error occured.</div>
              </Fragment>
            );
          }
          return (
            <Fragment>
              <Header as="h1">Drafts</Header>
              {data.drafts &&
                data.drafts.map(draft => (
                  <ProjectItem
                    key={draft.id}
                    post={draft}
                    refresh={() => refetch()}
                    isDraft={!draft.isPublished}
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

export const DRAFTS_QUERY = gql`
  {
    drafts {
      id
      text
      title
      isPublished
    }
  }
`;
