import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {HeaderWrapped, Body} from './Layouts';

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
        <HeaderWrapped />
        <Body />
      </div>
    );
  }
}


export default App
