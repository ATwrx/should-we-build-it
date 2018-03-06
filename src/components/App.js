import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Header, Footer, SimpleTabs} from './Layouts'

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
      tabValue: '',
    }
  }
  
  handleChange = (event, tabValue) => {
    this.setState({tabValue: event.target.tabValue});
  };
  render() {
    const tabValue = this.props.tabValue;
    return (
      <div>
        <Reboot />
        <MuiThemeProvider>
          <div className="App" style={style}>
            <Header />
            <SimpleTabs handleChange={this.handleChange.bind(this)} tabValue={tabValue} />
            <Footer handleChange={this.handleChange.bind(this)} tabValue={this.state.tabValue} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;