import React from 'react' 
import { Tabs, Paper } from 'material-ui';
import { Tab } from 'material-ui/Tabs';

const styles = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%"
}
export default props =>
<Paper style={styles} className="footer" position="static">
<Tabs
  value={0}
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