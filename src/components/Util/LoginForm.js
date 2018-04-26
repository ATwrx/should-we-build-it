import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import {withRouter} from 'react-router-dom';
import {Form, Button, Segment} from 'semantic-ui-react';

// eslint-disable-next-line
import {AUTH_TOKEN} from '../../constant';
import {LOGIN, ME_QUERY} from '../Constants/queries';

const updateCache = (cache, {data: {login}}) => {
  cache.writeQuery({
    query: ME_QUERY,
    data: {me: login.concat(login)},
  });
  console.log(login);
};

class LoginForm extends Component {
  state = {
    password: '',
    email: '',
  };

  handleChange = (event, {name, value}) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const {email, password} = this.state;
    return (
      <Mutation
        mutation={LOGIN}
        update={updateCache}
       >
        {(login, {data}) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              login({
                variables: {email, password},
              })
                .then(result => {
                  const token = data.login.token;

                  this.props.refreshTokenFn &&
                    this.props.refreshTokenFn({
                      [AUTH_TOKEN]: token,
                    });
                  this.props.history.replace('/');
                  window.location.reload();
                })
                .catch(err => {
                  console.log('error');
                });
            }}
            style={this.props.withStyle}>
            <Form.Input
              autoFocus
              name="email"
              icon="mail"
              iconPosition="left"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Input
              autoFocus
              name="password"
              type="password"
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            {this.state.email &&
              this.state.password && (
                <Button color="green" type="submit">
                  Login
                </Button>
              )}
          </Form>
        )}
      </Mutation>
    );
  }
}
export default withRouter(LoginForm);
