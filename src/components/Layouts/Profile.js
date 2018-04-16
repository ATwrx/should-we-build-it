import React, {Component} from 'react';

const styles = {
    height: 400,
  }
class Profile extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        console.log('yournotthough')
      )
    } else {
      return (
        <div style={styles} className="Profile">
            You need to log in... even though you can't right now...
        </div>
      )
    }
  }
}

export default Profile;
