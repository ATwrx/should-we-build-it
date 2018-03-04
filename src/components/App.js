import React, { Component } from 'react';
import Reboot from 'material-ui/Reboot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Header, Footer, NewProject } from './Layouts'

const style = {
  height: '99%',
  minHeight: "100vh",
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
}


class App extends Component {
  
  render() {
    return (
      <div>
        <Reboot />
        <MuiThemeProvider>
          <div className="App" style={style}>
            <Header />
            <NewProject />
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;