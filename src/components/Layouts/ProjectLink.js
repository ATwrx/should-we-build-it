import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header, Segment, } from 'semantic-ui-react';

const style = {
  ProjectItem: {
    margin : "1em 0em"
  }
}

export default class ProjectLink extends Component {
  render() {
    const project = this.props.project;
    let title = project.title;
    let owner = project.owner.name;
    let description = project.description;
    let text = project.text;

    if (this.props.isDraft) {
      title = `${title} (Draft)`;
    }

    return (
      <Segment.Group>
        <Segment style={style.ProjectItem}>
          <Link to={`/post/${this.props.project.id}`}>
            <Header as="h2">
              <Header.Content size="huge" content={`${title}`} />
              <Header.Subheader content={`Created by: ${owner}`} />
            </Header>
          </Link>
        </Segment>
        <Segment>
          <Header>Summery: </Header>
                {description}
        </Segment>
        <Segment>
          <Header>Description:</Header>
          {text}
          </Segment>
      </Segment.Group>
    );
  }
}
