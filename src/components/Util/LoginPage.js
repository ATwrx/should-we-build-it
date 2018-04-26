import React, {Component} from 'react'; // eslint-disable-next-line
import {LoginForm, SignUpForm} from '../Util'; // eslint-disable-next-line
import {Header, Container} from 'semantic-ui-react';

import {NavLoginButton} from '../Util'

const style = {
  ParentContainer: {
    padding: '2em 0em',
  },
  Form: {
    padding: '0em 0em 1em 0em',
    width: '50%',
    margin: '0 auto',
  },
};

export default class LoginPage extends Component {
  state = {
    signingUp: false,
  };

  handleFormSwap = e => {
    this.setState(
      this.state.signingUp ? {signingUp: false} : {signingUp: true},
    );
  };

  render() {
    return (
      <Container style={style.ParentContainer}>
        <Header
          as="h1"
          content="Looks like there's a brain storm on the horizon..."
          subheader="Login or sign up to start submitting ideas."
          dividing
        />
        {!this.state.signingUp && <LoginForm withStyle={style.Form} />}
        {this.state.signingUp && <SignUpForm />}
      </Container>
    );
  }
}
// <NavLoginButton />
