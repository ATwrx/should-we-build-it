import React, { Component } from 'react' 
import { Tabs, Paper } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

const styles = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
}
class Footer extends Component {
 state = {
   tabValue : 0,
 } 

  handleChange = (event, tabValue) => {
    this.setState({ tabValue });
  };
  
  render() {
    return (
    <Paper style={styles} className="footer" position="static">
      <Tabs
        value={this.state.tabValue}
        onChange={this.handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="My Projects" />
        <Tab label="Browse Projects" />
        <Tab label="My Profile" />
      </Tabs>
    </Paper>
    )
  }
}

export default Footer 