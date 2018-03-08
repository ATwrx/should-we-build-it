import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

class Profile extends Component {


    render() {
        return (
            <Paper className='Profile'>
              <Typography variant="headline" bottomGutter >
              Welcome back, {this.props.name} {this.props.name_last}
              </Typography>
              <br />
              <Typography variant="body1" >

              </Typography>
              <Typography variant="body2" >
                Total projects questioned : {this.props.projectCount}
                <br />
                Stars : {this.props.starts}
              </Typography>
            </Paper>
        )
    }
}

export default Profile
