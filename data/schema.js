import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type Query {
  user(email: String!): User
  project(title: String!): Project
  allProjects: [Project]
}

type User {
  id: Int
  firstName: String
  lastName: String
  email: String
  projects: [Project]
}

type Project {
 id: Int
 title: String
 summary: String
 text: String
 rating: Int
 comments: [Comment]
 created: Date
}

type Comment {
  user: User
  text: String
  created: Date
}
`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;
