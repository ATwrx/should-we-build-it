const { ApolloEngine } = require('apollo-engine');
const express = require('express');
const app = express();

// Add middleware as a second arg to app.use
app.use('/graphql', () => {
  console.log('ApolloEngine running on port:3000')
});

const engine = new ApolloEngine({
  apiKey: 'service:ATwrx-4179:J0IBzwHcSJTNT5gt8O4CMg'
})

engine.listen({
  port: 3000,
  expressApp: app,
})
