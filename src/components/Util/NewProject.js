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
    // PUT QUERY HERE
     this.setState({projects: [
       {
         title: 'Should We Build It',
        category: 'Web Site',
        lang: 'Javascript',
        desc: 'A small description goes here.',
      },
      {
        title: 'Social App Example',
        category: 'Mobile App',
        lang: 'Javascript',
        desc: 'A small description goes here.',
      },
      {
        title: 'Shopping App Example',
        category: 'Web App',
        lang: 'Javascript',
        desc: 'A small description goes here.',
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
                <AddProject roject addProject={this.handleAddProject.bind(this)} />
            </Paper>
        </Grid>
        <Grid item sm>
            <div style={styles.Paper}>
                <Projects projects={this.state.projects}/>
            </div>
        </Grid>
    </Grid>
      )}
}
export default NewProject;