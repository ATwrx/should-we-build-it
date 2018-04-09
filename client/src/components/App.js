import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import {Header, Body} from './Layouts';

const style = {
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

class App extends Component {
  state = {
    tabValue: 0,
    projects: [],
    error: null,
    isLoggedIn: false,
  };

  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(
        p => {
          this.setState({
            isLoaded: true,
            projects: p,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    return (
      <div className="App" style={style}>
        <Header />
        <Body tabValue={this.state.tabValue} projects={this.state.projects} />
      </div>
    );
  }
}

const ProjectFeedQuery = gql`query {
    allProjects(orderBy: createdAt_DESC) {
      id
      title
      desc
        }
    }`

export default graphql(ProjectFeedQuery)(App);
