import React, {Component} from 'react';
import {Header, Body} from './Layouts';
import request from 'request';

const style = {
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

function test() {
  request('/api', (err, res, body) => {
    console.log(res);
  });
}
test();

class App extends Component {
  state = {
    tabValue: 0,
    projects: {},
  };

  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  componentDidMount() {
    fetch('/api')
      .then(res => res.map((i, v) => this.setState({i, v})))
      .then(projects => this.setState({projects}));
  }

  render() {
    return (
      <div className="App" style={style}>
        <Header />
        <Body
          handleChange={this.handleChange.bind(this)}
          tabValue={this.state.tabValue}
          //projects={this.state.projects}
        />
      </div>
    );
  }
}

export default App;
