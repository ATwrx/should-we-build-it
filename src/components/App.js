import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Header, Body} from './Layouts';
import Sequelize from 'sequelize';

const db = new Sequelize(
  'mysql://ljg4pq9xy78cfyx1:jm4lypa67xzc76os@x3ztd854gaa7on6s.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/z0iu6axt5cfpdunt',
);

const style = {
  minHeight: '100vh',
  fontFamily: 'Roboto, sans-serif',
  display: 'flex',
  flexDirection: 'column',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: 0,
      //projects: () => { },
    };
  }
  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };
  auth = db
    .authenticate()
    .then(() => {
      console.log('Connected');
    })
    .catch(err => {
      console.log('not connected');
    });
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="App" style={style}>
            <Header />
            <Body
              handleChange={this.handleChange.bind(this)}
              tabValue={this.state.tabValue}
              projects={this.state.projects}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
