import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';


import {Body} from './components/Layouts';
const client = new ApolloClient({
  uri: 'http://localhost:4000'
  // uri: 'https://api.graph.cool/simple/v2/cjfrlkion2tff0153twgaeh4c',
});




const App = () => (
  <ApolloProvider client={client}>
    <Body />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
