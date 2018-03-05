import React, { Component } from 'react'
import { Grid, Paper } from 'material-ui'

import { Projects, AddProject } from '../Util'

const styles = {
    Grid: {
        height: "100%",
    },
    Paper: {
        flex: 1, 
        margin: 25,
        textAlign: "center"
    }
}

class NewProject extends Component {
  constructor() {
   super();
     this.state = {
       projects: []
    }
  }

 
  componentWillMount(){
     this.setState({projects: [
       {
         title: 'Should We Build It',
        category: 'Web Site',
        lang: 'Javascript'
      },
      {
        title: 'Social App Example',
        category: 'Mobile App',
        lang: 'Javascript'
      },
      {
        title: 'Shopping App Example',
        category: 'Web App',
        lang: 'Javascript',
      }
    ]});
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

   render() {
      return (
   <Grid container>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <AddProject addProject={this.handleAddProject.bind(this)} />
            </Paper>
        </Grid>
        <Grid item sm>
            <Paper style={styles.Paper}>
                <Projects projects={this.state.projects}/>
            </Paper>
        </Grid>
    </Grid>
      )}
}
export default NewProject;