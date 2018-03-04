import React from 'react'; 
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

const styles = {
   flex: {
       flex: 1,
   },
   menuButton: {
    marginLeft: -12,
    marginRight: 20,
   },
}


export default props =>
<AppBar style={styles.root} title="Should We Build It ?" position="static">
    <Toolbar>
    <IconButton  className="menuButton" color="inherit" aria-label="Menu">
        <MenuIcon style={styles.menuButton} />
        </IconButton>
        <Typography variant="title" color="inherit" style={styles.flex}>
            Should We Build It?
        </Typography>
        <Button color="inherit">Login</Button>
    </Toolbar>
</AppBar>