import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {Header, Container, Button, Form} from 'semantic-ui-react';

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

const LOGIN = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export default class Welcome extends Component {
  state = {
    loginEmail: '',
    loginPass: '',
    signupName: '',
    signupPass: '',
    submittedEmail: '',
    submittedName: '',
    submittedPass: '',
    signingUp: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleFormSwap = e => {
    e.preventDefault();
    this.setState(
      this.state.signingUp ? {signingUp: false} : {signingUp: true},
    );
  };

  render() {
    return (
      <Mutation mutation={LOGIN}>
        {(login, {data}) => (
          <Container style={style.ParentContainer}>
            <Header
              as="h1"
              content="Looks like there's a brain storm on the horizon..."
              subheader="Login or sign up to start submitting ideas."
              dividing
            />
            <Form
              style={style.Form}
              onSubmit={e => {
                e.preventDefault();
                let s = this.state;
                this.setState({
                  submittedEmail: e.loginEmail,
                  submittedPass: e.loginPass,
                });
                login({
                  variable: {
                    email: s.submittedEmail,
                    password: s.submittedPass,
                  },
                });
              }}
              onChange={this.handleChange}>
              {this.state.signingUp && (
                <Form.Input
                  name="signupName"
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                />
              )}
              <Form.Input
                name="loginEmail"
                icon="mail"
                iconPosition="left"
                placeholder="E-mail"
              />
              <Form.Input
                name="loginPassword"
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              {this.state.signingUp && (
                <Form.Input
                  name="signupPassword"
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                />
              )}
              <Button.Group fluid>
                <Button color="green" type="submit" >
                  Login
                </Button>
                <Button.Or text="or" />
                <Button color="blue" onClick={this.handleFormSwap}>
                  Sign up
                </Button>
              </Button.Group>
            </Form>
          </Container>
        )}
      </Mutation>
    );
  }
}
