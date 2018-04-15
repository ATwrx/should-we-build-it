import React from 'react';
import ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';


import {Body} from './components/Layouts';
const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v2/cjfrlkion2tff0153twgaeh4c',
  // fetchOptions: {
  //    credentials: 'include',
  // },
});

const projectQuery = {
  query: gql`
    query {
      allProjects {
        id
        title
        owner {
          id
          name
        }
        slug
        description
        text
      }
    }
  `,
};

client.query(projectQuery).then(res => console.log(res));

const App = () => (
  <ApolloProvider client={client}>
    <Body />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
