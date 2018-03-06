import React, { Component } from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
// import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class AddProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      category: '',
      // user: '',
      desc: '',
      // contactEmail: ''
    }
  }; 
  
  static defaultProps = {
    categories: ['Web Site', 'Web App', 'Mobile App']
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is required');
    } else {
      this.setState({newProject:{
        title: this.refs.title.value,
        category: this.refs.category.value,
        lang: this.refs.lang.value,
        desc : this.refs.desc.value,
        contactEmail: this.refs.contactEmail.value
      }}, function() {
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    // const categoryOptions = this.props.categories.map(category => {
    //   return <option key={category} value={category}>{category}</option>
    // })
    return (
    <div>
      <h3>Add a New Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            id="title"
            label="Project Title"
            className={classes.TextField}
            value={this.state.name}
            margin="normal"
          /> 
          <TextField
            id="desc"
            label="Project Description"
            defaultValue="Keep it simple, stupid"
            className={classes.TextField}
          />
          <br />
        <Button variant='raised' label='submit' type='submit' color='primary'>Submit</Button>
      </form>
    </div>
        );
  }
}

AddProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddProject);
