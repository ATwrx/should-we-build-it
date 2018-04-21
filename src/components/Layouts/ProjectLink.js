import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Header, Segment, Divider, Grid} from 'semantic-ui-react';

export default class ProjectLink extends Component {
  render() {
    let title = this.props.project.title;
    let owner = this.props.project.owner.name;
    let description = this.props.project.description;
    let text = this.props.project.text;

    if (this.props.isDraft) {
      title = `${title} (Draft)`;
    }

    return (
      <Link to={`/post/${this.props.project.id}`}>
        <Segment inverted>
          <Header as="h2" >
            {title}
            </Header>
            <Header as="h3" sub>
              Created by : {owner}
          </Header>
          <Divider />
          <Grid columns={2}>
            <Grid.Column>
              <Segment.Group>
                <Segment>
                  <Header>Summery: </Header>
                  {description}
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Header>Description:</Header>
                {text}
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
      </Link>
    );
  }
}
