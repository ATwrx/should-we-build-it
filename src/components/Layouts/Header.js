import React, { Component } from 'react'; 
import { AppBar, Toolbar, Typography } from 'material-ui';
import Button from 'material-ui/Button';

const styles = {
   flex: {
       flex: 1,
   },
}
     

class Header extends Component {
    render() {
        return(
            <AppBar style={styles.root} title="Should We Build It ?" position="static">
                <Toolbar>
                <Typography variant="headline" color="inherit" style={styles.flex}>
                        Should We Build It?
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Header