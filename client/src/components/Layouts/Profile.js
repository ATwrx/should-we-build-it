import React, {Component} from 'react';
import {Paper, Typography} from 'material-ui';

const styles = {
    height: 400,
  }
class Profile extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Paper className="Profile">
          <Typography variant="headline" >
            Welcome back, {this.props.name} {this.props.name_last}
          </Typography>
          <br />
          <Typography variant="body1" />
          <Typography variant="body2">
            Total projects questioned : {this.props.projectCount}
            <br />
            Stars : {this.props.starts}
          </Typography>
        </Paper>
      );
    } else {
      return (
        <Paper style={styles} className="Profile">
          <Typography variant='headline' >
            You need to log in... even though you can't right now...
          </Typography>
        </Paper>
      )
    }
  }
}

export default Profile;
