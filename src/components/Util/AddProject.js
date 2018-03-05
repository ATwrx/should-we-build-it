import React, { Component } from 'react';
import Button from 'material-ui/Button';

class AddProject extends Component {
  constructor(){
    super();
    this.state = {
    newProject: {}
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
        category: this.refs.category.value
      }}, function(){
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
    <div>
      <h3>Add a New Project</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label>
          <input type="text" ref="title" />
        </div>
        <div>
          <label>Language</label>
          <input type="text" ref="lang" />
        </div>
        <div>
          <label>Category</label>
          <select ref="category">
              {categoryOptions}
          </select>
        </div>
        <Button variant='raised' label='submit' type='submit' color='primary'>Submit</Button>
      </form>
    </div>
        );
  }
}

export default AddProject;
