import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header, List} from 'semantic-ui-react';

export default class ProjectLink extends Component {
  render() {
    let title = this.props.project.title;
    let owner = this.props.project.owner;
    let summery = this.props.project.summery;

    if (this.props.isDraft) {
      title = `${title} (Draft)`;
    }

    return (
      <Link to={`/post/${this.props.post.id}`}>
        <Header as="h2">{title}</Header>
        <List>
          <List.Item>
            <List.Header>{owner}</List.Header>
            {summery}
          </List.Item>
        </List>
      </Link>
    );
  }
}
