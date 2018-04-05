import React, {Component} from 'react';
import {Paper, Typography} from 'material-ui';

const styles = {
  ProjectItem: {
    marginTop: 15,
    padding: 15,
  },
  Title: {
    color: 'black',
  },
};

//TODO: Make createdDate prettier
class ProjectItem extends Component {
  render() {
    return (
      <Paper style={styles.ProjectItem} className="ProjectItem">
        <Typography style={styles.Title} variant="headline" align="center">
          {this.props.project.title}
        </Typography>

        {/*
        <Typography variant="subheading" gutterbottom="true">
          {this.props.project.createdDate}
        </Typography> 
        */}

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
