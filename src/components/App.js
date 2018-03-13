import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header, Body} from './Layouts';

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
      tabValue: 0,
    }
  }
  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    return (
      <div>
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
