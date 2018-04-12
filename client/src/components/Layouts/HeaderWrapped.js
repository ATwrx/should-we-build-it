import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit,
  },
});

class Header extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;

    return (
      <AppBar style={styles.root} position="static">
        <Toolbar>
          <Typography variant="headline" color="inherit" style={styles.flex}>
            Should We Build It?
          </Typography>
          <Button color="inherit" onClick={this.handleOpen}>
            Login
          </Button>
          <Modal
            aria-labelledby="login-modal"
            aria-describedby="login-modal-detail"
            open={this.state.open}
            onClose={this.handleClose}>
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="title" id="login-modal">
                Login Area
              </Typography>
              <Typography variant="subheading" id="login-modal-detail">
                Login Area
              </Typography>
        <HeaderWrapped />
            </div>
          </Modal>
        </Toolbar>
      </AppBar>
    );
  }
}

const HeaderWrapped = withStyles(styles)(Header);

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default HeaderWrapped;
