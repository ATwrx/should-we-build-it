import React, {Component} from 'react';
import {Tabs, Paper} from 'material-ui';
import {Tab} from 'material-ui/Tabs';
import {PageTabs} from '../Layouts';

const styles = {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};
class Body extends Component {
  constructor() {
    super();
    this.state = {
      tabValue: 0,
    };
  };

  handleChange = (event, tabValue) => {
    this.setState({tabValue: tabValue});
  };

  render() {
    return (
      <div className="mainBody">
        <PageTabs
          tabValue={this.state.tabValue}
          projects={this.props.projects}
          user={this.props.user}
        />
        
        <Paper style={styles} className="footer" position="static">
          <Tabs
            value={this.state.tabValue}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered>
            <Tab label="My Projects" />
            <Tab label="Browse Projects" />
            <Tab label="My Profile" />
          </Tabs>
        </Paper>
      </div>
    );
  }
}

export default Body;
