import React, {Component, Fragment} from 'react';
import {Query} from 'react-apollo';
import {Header, Loader, Segment} from 'semantic-ui-react';
import {ProjectItem} from '../Layouts';

import {DRAFTS_QUERY} from '../Constants/queries';



export default class Drafts extends Component {
  render() {
    return (
      <Query query={DRAFTS_QUERY}>
        {({data, loading, error, refetch}) => {
          if (loading) {
            return (
              <Fragment>
                <Loader active>Loading ...</Loader>
              </Fragment>
            );
          }

          if (error) {
            return (
                <Segment color="red">An unexpected error occured.</Segment>
            );
          }
          return (
            <Fragment>
              <Header as="h1" content="Drafts" />
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


