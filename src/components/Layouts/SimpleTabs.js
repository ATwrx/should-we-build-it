import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
});

class  SimpleTabs extends Component {
  state = { 
    tabValue : 0, 
  }
  
 

  render() {
    const { classes } = this.props;
    const { tabValue } = this.state.tabValue;

    return (
        <div className={classes.root}>
            {tabValue === 0 && <TabContainer>Item One</TabContainer>}
            {tabValue === 1 && <TabContainer>Item Two</TabContainer>}
            {tabValue === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
    )
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);