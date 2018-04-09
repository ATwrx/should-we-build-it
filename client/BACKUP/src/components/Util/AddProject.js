import React, {Component} from 'react';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  menu: {
    width: 200,
  },
  button: {
    margin: 10,
  },
});

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newProject: {},
    };
  }

  static categories = ['Web Site', 'Web App', 'Mobile App'];

  handleSubmit = e => {
    e.preventDefault();
    if (e.target.title.value === '') {
      alert('Title is required');
    } else {
      this.setState(
        {
          newProject: {
            title: e.target.title.value,
            lang: e.target.lang.value,
            desc: e.target.desc.value,
          },
        },
        () => {
          this.props.addProject(this.state.newProject);
        },
      );
    }
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <h3>Add a New Project</h3>

        <form onSubmit={this.handleSubmit}>
          <TextField
            id="title"
            label="Project Title"
            className={classes.TextField}
            value={this.state.title}
            margin="normal"
          />
          <br />

          <TextField
            id="lang"
            label="Programming Language"
            className={classes.TextField}
            value={this.state.lang}
            margin="normal"
          />

          <br />

          <TextField
            id="desc"
            label="Project Description"
            className={classes.TextField}
            value={this.state.desc}
            rowsMax="4"
            multiline
          />

          <br />

          <Button
            className={classes.button}
            variant="raised"
            label="submit"
            type="submit"
            color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddProject);
