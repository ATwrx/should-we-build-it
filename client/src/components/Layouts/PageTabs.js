import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {NewProject, Projects} from '../Util';
import {Profile} from '../Layouts';

const TabContainer = (props) => {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
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
  },
});

class PageTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabValue: props.tabValue,
    };
  }

  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        {this.props.tabValue === 0 && (
          <TabContainer>
            <NewProject projects={this.props.projects} />
          </TabContainer>
        )}

        {this.props.tabValue === 1 && (
          <TabContainer>
            <Projects projects={this.props.projects} />
          </TabContainer>
        )}

        {this.props.tabValue === 2 && (
          <TabContainer>
            <Profile
              user={this.props.user}
            />
          </TabContainer>
        )}
      </div>
    );
  }
}

PageTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageTabs);
