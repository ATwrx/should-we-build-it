import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { NewProject } from '../Util'

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
 constructor(props) {
   super(props);
   this.state = { tabValue: props.tabValue }
 }

  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            {this.props.tabValue === 0 && <TabContainer>
              <NewProject />
            </TabContainer>}
            {this.props.tabValue === 1 && <TabContainer>Item Two</TabContainer>}
            {this.props.tabValue === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
    )
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
