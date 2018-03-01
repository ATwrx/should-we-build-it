import React, { Component } from 'react';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
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
        category: 'Web Site'
      },
      {
        title: 'Social App Example',
        category: 'Mobile App'
      },
      {
        title: 'Shopping App Example',
        category: 'Web App'
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
      <div className="App">
        <MuiThemeProvider>
          <AddProject addProject={this.handleAddProject.bind(this)} />
          <Projects projects={this.state.projects}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
