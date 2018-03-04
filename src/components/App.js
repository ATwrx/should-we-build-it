import React, { Component } from 'react';

import Reboot from 'material-ui/Reboot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { getMuiTheme } from 'material-ui/styles';

import { Header, Footer } from './Layouts'
import Utils from './Util'

const style = {
  height: '100%',
  minHeight: "100vh",
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
}

export default class extends Component {

// import { darkBaseTheme } from 'material-ui/styles'; (import at top)
// darkBaseTheme:
// const muiTheme = getMuiTheme(darkBaseTheme);


  // constructor() {
  // super();
  //   this.state = {
  //     projects: []
      // ^^ needs to retrieve projects from SQL
    // }
  // }

 

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <MuiThemeProvider>
          <Reboot />
        <div className="App" style={style}>
          <Header />
          <Utils />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
 // componentWillMount(){
  //   this.setState({projects: [
  //     {
  //       title: 'Should We Build It',
  //       category: 'Web Site',
  //       lang: 'Javascript'
  //     },
  //     {
  //       title: 'Social App Example',
  //       category: 'Mobile App',
  //       lang: 'Javascript'
  //     },
  //     {
  //       title: 'Shopping App Example',
  //       category: 'Web App',
  //       lang: 'Javascript',
  //     }
  //   ]});
  // }
          //  <AddProject addProject={this.handleAddProject.bind(this)} />
          //  <Projects projects={this.state.projects}/>