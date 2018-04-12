import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Button, TextField } from 'material-ui';

const styles = theme => ({
  TextArea: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class ProjectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {},
    };
  }

  static categories = ['Web Site', 'Web App', 'Mobile App'];

  handleChange = name => event => {
    this.setState({
      newProject: {
        [name]: event.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    //TODO
  };

  render() {
    const {classes} = this.props;
    // onSubmit={this.handleSubmit} <-- prop for the form
    return (
      <form
        onChange={this.handleChange}
        noValidate
        autoComplete="off">

        <TextField
          id="title"
          label="Project Title"
          className={classes.TextField}
          onChange={this.handleChange('title')}
          value={this.state.title}
        />
        <br />

        <TextField
          id="lang"
          label="Programming Language"
          className={classes.TextField}
          value={this.state.lang}
          defaultValue='Node.js'
          margin="normal"
        />
        <br />

        <TextField
          id="desc"
          label="Project Description"
          className={classes.TextField}
          value={this.state.desc}
          rowsMax="5"
          controlled
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
    );
  }
}

ProjectForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectForm);
