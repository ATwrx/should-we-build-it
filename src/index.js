import React from 'react';
import ReactDOM from 'react-dom'; //eslint-disable-next-line
import {ApolloProvider} from 'react-apollo'; //eslint-disable-next-line
import {ApolloClient} from 'apollo-client'; //eslint-disable-next-line
import {HttpLink} from 'apollo-link-http'; //eslint-disable-next-line
import {InMemoryCache} from 'apollo-cache-inmemory'; //eslint-disable-next-line
import {WebSocketLink} from 'apollo-link-ws'; //eslint-disable-next-line
import {getMainDefinition} from 'apollo-utilities';
import {ApolloLink, split} from 'apollo-link'; //eslint-disable-next-line

import {AUTH_TOKEN} from './constant';
import App from './App';
const secret = 'atlassian';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000',
  credentials: 'same-origin',
  connectToDevTools: true,
});

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : '',
    },
  });
  return forward(operation);
});

// authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink);
const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`,
    },
  },
});

const link = split(
  // split based on operation type
  ({query}) => {
    const {kind, operation} = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLinkAuth,
);

const client = new ApolloClient({
  link: ApolloLink.from([link]),
  cache: new InMemoryCache(),
  secret,
  connectToDevTools: true,
});

const token = localStorage.getItem(AUTH_TOKEN);

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App token={token} />
  </ApolloProvider>
);

ReactDOM.render(<ApolloApp />, document.getElementById('root'));
