import React, { Component } from 'react';
import { Grid, Paper } from 'material-ui';
import { ProjectForm } from '../Util';

const styles = {
  Grid: {
    height: '100%',
  },
  Paper: {
    flex: 1,
    margin: 25,
    textAlign: 'center',
  },
};

class NewProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: [],
    };
  }

  handleAddProject = (project) => {
    this.setState({newProject: project});
    // TODO: Push project to server
    this.props.projects.push(project);
  };

  render() {
    return (
      <Grid container>
          <Paper style={styles.Paper}>
            <ProjectForm
              projects={this.props.projects}
              addProject={this.handleAddProject.bind(this)}
            />
          </Paper>
        </Grid>
    );
  }
}
export default NewProject;
