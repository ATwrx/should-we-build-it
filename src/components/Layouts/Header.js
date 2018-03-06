import React from 'react'; 
import { AppBar, Toolbar, Typography } from 'material-ui';
import Button from 'material-ui/Button';

const styles = {
   flex: {
       flex: 1,
   },
}
     

export default props =>
<AppBar style={styles.root} title="Should We Build It ?" position="static">
    <Toolbar>
      <Typography variant="title" color="inherit" style={styles.flex}>
            Should We Build It?
        </Typography>
        <Button color="inherit">Login</Button>
    </Toolbar>
</AppBar>