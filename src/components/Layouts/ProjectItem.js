import React, {Component} from 'react';

const styles = {
  ProjectItem: {
    marginTop: 15,
    padding: 15,
  },
  Title: {
    color: 'black',
  },
};

class ProjectItem extends Component {
  render() {
    return (
      <div style={styles} >
          {this.props.project.title}
        </div>


    );
  }
}

export default ProjectItem;
