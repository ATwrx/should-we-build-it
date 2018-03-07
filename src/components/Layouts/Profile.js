import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

class Profile extends Component {


    render() {
        return (
            <Paper className='Profile'>
              <Typography variant="headline" bottomGutter >
              Welcome back, {this.props.name}
              </Typography>
              <br />
              <Typography variant="body1" >
                My intrests include {this.props.ints[0]} and {this.props.ints[1]}
              </Typography>
              <Typography variant="body2" >
                Total projects questioned : {this.props.projectCount}
              </Typography>
            </Paper>
        )
    }
}

export default Profile
