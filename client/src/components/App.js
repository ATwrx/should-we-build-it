import React, {Component} from 'react';
import {Header, Body} from './Layouts';

const style = {
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

class App extends Component {
  render() {
    return (
      <div className="App" style={style}>
        <Header />
        <Body />
      </div>
    );
  }
}


export default App
