import React, {Component} from 'react'; //eslint-disable-next-line
import {Grid, Segment, Form, TextArea, Button} from 'semantic-ui-react'; //eslint-disable-next-line
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

import {DRAFTS_QUERY, CREATE_DRAFT} from '../Constants/queries';

class ProjectForm extends Component {
  state = {
    title: '',
    text: '',
    description: '',
  };

  handleChange = (e, {name, value}) => this.setState({[name]: value});

  render() {
    return (
      <Mutation
        mutation={CREATE_DRAFT}
        update={(cache, {data}) => {
          const {drafts} = cache.readQuery({query: DRAFTS_QUERY});
          cache.writeQuery({
            query: DRAFTS_QUERY,
            data: {drafts: drafts.concat([data.createDraft])},
          });
        }}>
        {(createDraft, {data, loading, error}) => {
          return (
            <Form
              onSubmit={async e => {
                e.preventDefault();
                const {title, text, description} = this.state;
                await createDraft({
                  variables: {title, text, description},
                });
                this.props.history.replace('/drafts');
              }}>
                  <Form.Input
                    placeholder="Project Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                  <TextArea
                    placeholder="Write a brief summary of your idea..."
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                    autoHeight
                  />

                  <TextArea
                    placeholder="Write as much as you'd like about your idea here..."
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    autoHeight
                  />
              <Button content="Submit" type="submit" />
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default ProjectForm;
