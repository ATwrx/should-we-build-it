import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header, Body} from './Layouts'

const style = {
  minHeight: "100vh",
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
}


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      browseProjectsOpen: true,
      myProjects: false,
      profileOpen: false,
      tabValue: 0,
    }
  }
  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    return (
      <div>
        <Reboot />
        <MuiThemeProvider>
          <div className="App" style={style}>
            <Header />
            <Body handleChange={this.handleChange.bind(this)} tabValue={this.state.tabValue} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
