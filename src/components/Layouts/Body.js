import React, { Component } from 'react'
import { Tabs, Paper } from 'material-ui';
import { Tab } from 'material-ui/Tabs';
import { SimpleTabs } from '../Layouts';

const styles = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
}
class Body extends Component {
  constructor(props){
    super(props)
    this.state ={
      tabValue: this.props.tabValue
    }
  }
 handleChange = (event, tabValue) => {
   this.setState({tabValue: tabValue})
 }
  render() {
    return (
    <div className="mainBody" >
      <SimpleTabs  tabValue={this.state.tabValue} />
      <Paper style={styles} className="footer" position="static">
        <Tabs
          value={this.state.tabValue}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
        <Tab label="My Projects" />
        <Tab label="Browse Projects"  />
        <Tab label="My Profile"  />
      </Tabs>
    </Paper>
  </div>
    )
  }
}

export default Body
