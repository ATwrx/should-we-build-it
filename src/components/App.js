import React, {Component} from 'react';
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
    error: null,
    projects: [],
  };

  componentWillMount() {
    fetch('/api/projects')
      .then(res => {
        res.json()
      })
      .then(
        result => {
          this.setState({
            isLoaded: true,
            projects: result,
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
  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    return (
      <div className="App" style={style}>
        <Header />
        <Body
          handleChange={this.handleChange.bind(this)}
          tabValue={this.state.tabValue}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

export default App;
