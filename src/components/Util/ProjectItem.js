import React, { Component } from 'react';
import { Paper, Typography } from 'material-ui';

const styles = {
  ProjectItem: {
      marginTop: 15,
      padding: 15,
  },
  Title: {
    color: "black"
  }
}
class ProjectItem extends Component {
  render() {
    return (
      <Paper style={styles.ProjectItem} className="ProjectItem">

        <Typography style={styles.Title} variant="display1" gutterBottom align="center">
          {this.props.project.title}
        </Typography>
        
        <Typography variant="body2" align="left">
          Category : {this.props.project.category}
        </Typography>
        
        <Typography variant="body2" align="left">
          Language : {this.props.project.lang}
        </Typography>
        <Typography variant="body2" align="left">
          Description : {this.props.project.desc}
        </Typography>
      </Paper>
    );
  }
}

export default ProjectItem;
