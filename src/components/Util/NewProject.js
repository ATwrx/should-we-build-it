import React, {Component} from 'react';
import {Grid, Paper} from 'material-ui';
import {Projects, AddProject} from '../Util';

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
      projects: [],
    };
  }
  //componentWillMount(){ }

  handleAddProject(project) {
    let projects = this.props.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  render() {
    return (
      <Grid container>
        <Grid item sm>
          <Paper style={styles.Paper}>
            <AddProject
              projects={this.props.projects}
              addProject={this.handleAddProject.bind(this)}
            />
          </Paper>
        </Grid>
        <Grid item sm>
          <div style={styles.Paper}>
            <Projects projects={this.props.projects} />
          </div>
        </Grid>
      </Grid>
    );
  }
}
export default NewProject;
