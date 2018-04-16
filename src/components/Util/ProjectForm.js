import React, {Component} from 'react';
import {Form, TextArea, Button} from 'semantic-ui-react';

class ProjectForm extends Component {
  state = {
    title: '',
    submittedTitle: '',
    slug: '',
    submittedSlug: '',
    description: '',
    submittedDescription: '',
    text: '',
    submittedText: '',
  };

  static categories = ['Web Site', 'Web App', 'Mobile App'];

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = (e, {name, value}) => this.setState({[name]: value});

  handleSubmit = () => {
    const {title, slug, description, text} = this.state;
    this.setState({
      submittedTitle: title,
      submittedSlug: slug,
      submittedDescription: description,
      submittedText: text,
    });
  };

  render() {
    const {title, slug, text, description} = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Group>
          <Form.Input
            placeholder="Project Title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <Form.Input
            placeholder="this-is-a-slug"
            name="slug"
            value={slug}
            onChange={this.handleChange}
          />
        </Form.Group>

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

        <Button content="Submit" type="submit" />
      </Form>
    );
  }
}

export default ProjectForm;
