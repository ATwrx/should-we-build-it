import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // eslint-disable-next-line
import {Container} from 'semantic-ui-react'; // eslint-disable-next-line
import { AUTH_TOKEN } from './constant'
import { isTokenExpired } from './helper/jwtHelper'
import {
  Dashboard,
  LoginPage,
  CreatePage,
  Drafts,
  ProjectFeed,
} from './components/Util'; // eslint-disable-next-line
import {TitleBar, Profile, ProjectItem} from './components/Layouts';

class App extends Component {
  constructor(props) {
    super(props)
    this.refreshTokenFn = this.refreshTokenFn.bind(this)

    this.state = {
      token: props.token,
      isUser: false,
      signingUp: false,
    }
  }
  refreshTokenFn(data = {}) {
    const token = data.AUTH_TOKEN

    if (token) {
      localStorage.setItem(AUTH_TOKEN, token)
    } else {
      localStorage.removeItem(AUTH_TOKEN)
    }

    this.setState({
      token: data.AUTH_TOKEN,
    })
  }
   bootStrapData() {
    try {
      const token = localStorage.getItem(AUTH_TOKEN)
      if (token !== null && token !== undefined) {
        const expired = isTokenExpired(token)
        if (!expired) {
          this.setState({ token: token })
        } else {
          localStorage.removeItem(AUTH_TOKEN)
          this.setState({ token: null })
        }
      }
    } catch (e) {
      console.log('')
    }
  };

 componentDidMount() {
    this.bootStrapData()
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <TitleBar user={this.state.user} />
          <Container style={{padding: '0em 2em'}}>
            <Switch>
              <Route path="/explore" component={ProjectFeed} />
              <Route path="/drafts" component={CreatePage} />
              <Route path="/profile:id" component={Profile} />
              <Route path="/project:id" component={ProjectItem} />
              <Route path="/login" component={LoginPage} />
              <Route component={this.state.isUser ? Dashboard : LoginPage} />
            </Switch>
          </Container>
        </Container>
      </Router>
    );
  }
}

export default App;
