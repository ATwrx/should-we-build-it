import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';

export default class ProjectDetails extends Component {
  render() {
    return <Card>{this.props.project.title}</Card>;
  }
}
