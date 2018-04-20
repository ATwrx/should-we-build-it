import React, {Component} from 'react';
import gql from 'graphql-tag'
import {Form, TextArea, Button} from 'semantic-ui-react';

class ProjectForm extends Component {
  state = {
    title: '',
    description: '',
    text: '',
    submittedTitle: '',
    submittedDescription: '',
    submittedText: '',
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = (e, {name, value}) => this.setState({[name]: value});

  handleSubmit = () => {
    const {title, description, text} = this.state;
    this.setState({
      submittedTitle: title,
      submittedDescription: description,
      submittedText: text,
    });
  };

  render() {
    const {title, text, description} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>

          <Form.Input
            placeholder="Project Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />


        <Form.Group>
        <div className="textAreaWrapper input">
          <TextArea
            placeholder="Write a brief summary of your idea..."
            name="description"
            value={description}
            onChange={this.handleChange}
            autoHeight
          />
        </div>

        <div className="textAreaWrapper input">
          <TextArea
            placeholder="Write as much as you'd like about your idea here..."
            name="text"
            value={text}
            onChange={this.handleChange}
            autoHeight
          />
        </div>
        </Form.Group>

        <Button content="Submit" type="submit" />
      </Form>
    );
  }
}

export default ProjectForm;
