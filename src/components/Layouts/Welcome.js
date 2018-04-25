import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import {Header, Divider, Container, Button, Form} from 'semantic-ui-react';

const style = {
  ParentContainer: {
    padding: "2em 0em"
  },
  Form: {
    padding: "0em 0em 1em 0em",
    width: "50%",
    margin: "0 auto"
  }
};

const LOGIN_MUTATION = gql`
   mutation Login($email: String $password: String) {
    login(email: $email password: $password){
      token
      user{
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
    signupPassword: '',
    submittedEmail: '',
    submittedPass: '',
    signingUp: false,
  };

  handleLogin = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
 handleFormSwap = e => {
   this.setState(this.state.signingUp ? {signingUp: false} : {signingUp: true})
 }
  render() {
    return(
       <Container style={style.ParentContainer}>
        <Header as="h1" content="Looks like there's a brain storm on the horizon..." subheader="Login or sign up to start submitting ideas." dividing />
        <Form style={style.Form}>
          {this.state.signingUp &&  <Form.Input name="signupName" icon="user" iconPosition="left" placeholder="User Name" /> }
          <Form.Input name="loginEmail" icon="mail" iconPosition="left" placeholder="E-mail" />
          <Form.Input name="loginPassword" icon="lock" iconPosition="left" placeholder="Password" type="password" />
          {this.state.signingUp &&  <Form.Input name="signupPassword" icon="lock" iconPosition="left" placeholder="Confirm Password" type="password" />}
          <Button.Group  fluid>
          <Button color="green" onClick={this.handleFormSwap}>
            Login
          </Button>
          <Button.Or text="or"  />
          <Button color="blue" onClick={this.handleFormSwap} >
            Sign up
          </Button>
          </Button.Group>
        </Form>
      </Container>
    )
  }
}
