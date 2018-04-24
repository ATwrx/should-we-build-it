import React, {Component, Fragment} from 'react';
import {Grid, Header, Divider, Segment, Button, Form} from 'semantic-ui-react';

export default class Welcome extends Component {
  state = {
    loginEmail: '',
    loginPass: '',
    signupName: '',
    signupEmail: '',
    signupPass: '',
    signupPassConfirm: '',
    submittedEmail: '',
    submittedPass: '',
  };

  handleLogin = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <Segment.Group className="login-form">
          <Segment>
            <Header as="h1"> Welcome! </Header>
          </Segment>
          <Grid columns={2}>
            <Grid.Column>
              <Segment>
                <Form>
                  <Form.Input
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                  />

                  <Form.Input
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                  />
                </Form>
              </Segment>
              <Segment>
                <Button color="teal" fluid size="large" attached="top">
                  Login
                </Button>
              </Segment>
            </Grid.Column>
            <Grid.Column />
          </Grid>
        </Segment.Group>
      </Fragment>
    );
  }
}
