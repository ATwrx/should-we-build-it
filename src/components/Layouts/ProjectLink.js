import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header, List} from 'semantic-ui-react';

export default class ProjectLink extends Component {
  render() {
    let title = this.props.project.title;
    let owner = this.props.project.owner.name;
    let description = this.props.project.description;

    if (this.props.isDraft) {
      title = `${title} (Draft)`;
    }

    return (
      <Link to={`/post/${this.props.project.id}`}>
        <Header as="h2">{title}</Header>
        <List>
          <List.Item>
            <List.Header>{owner}</List.Header>
            {description}
          </List.Item>
        </List>
      </Link>
    );
  }
}
