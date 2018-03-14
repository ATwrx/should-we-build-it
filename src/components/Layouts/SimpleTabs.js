import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { NewProject, Projects } from '../Util';
import { Profile } from '../Layouts';


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
  },
});

class  SimpleTabs extends Component {
 constructor(props) {
   super(props);
   this.state = {
     tabValue: props.tabValue,
     projects: props.projects,               
   }
 }
  componentWillMount(){
     this.setState({
      /* projects: [
       {
        title: 'Should We Build It',
        category: 'Web Site',
        lang: 'Javascript',
        desc: 'A small description goes here.',
        dateCreated : new Date()
      },
      {
        title: 'Social App Example',
        category: 'Mobile App',
        lang: 'Javascript',
        desc: 'A small description goes here.',
        dateCreated : new Date()
      },
      {
        title: 'Shopping App Example',
        category: 'Web App',
        lang: 'Javascript',
        desc: 'A small description goes here.',
        dateCreated : new Date()

      }
    ],*/
       u: {
      name_first : 'Dev',
      name_last : 'Dude',
      name_full : 'Dev Dude',
      projectCount : 3,
      stars : 25
    }}
   );
  }
  handleChange = (event, tabValue) => {
    this.setState({tabValue});
  };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root}>
            {this.props.tabValue === 0 && <TabContainer>
              <NewProject projects={this.state.projects}/>
            </TabContainer>}
            {this.props.tabValue === 1 && <TabContainer>
              <Projects projects={this.state.projects}/>
            </TabContainer>}
            {this.props.tabValue === 2 && <TabContainer>
              <Profile start={this.state.u.stars} name={this.state.u.name_full} ints={this.state.u.ints} projectCount={this.state.u.projectCount}/>
            </TabContainer>}
        </div>
    )
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
