import React, { Component } from 'react'
import { Paper, Typography } from 'material-ui'

class Profile extends Component {


    render() {
        return (
            <Paper className='Profile' ints={this.props.u_ints} projectCount={this.u_projectCount}>
              <Typography variant="display3"  >
              Welcome back, {this.props.name}
              </Typography>
              <Typography variant="display4" >
                Hey there {this.props.name}
              </Typography>
              <Typography variant="display4" >
                Hey there {this.props.name}
              </Typography>
            </Paper>
        )
    }
}

export default Profile
