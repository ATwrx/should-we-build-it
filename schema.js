const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull,
  // GraphQLID,
} = require('graphql');

// User Query
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    userName: {type: GraphQLString},
    email: {type: GraphQLString},
  }),
});

// Project Query
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: {type: GraphQLInt},
    project_name: {type: GraphQLString},
    category: {type: GraphQLString},
    project_lang: {type: GraphQLString},
    project_desc: {type: GraphQLString},
    UserId: {type: GraphQLString},
    createdAt: {type: GraphQLString},
  }),
});
// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {type: GraphQLInt},
      },
      resolve(parentValue, args) {
        axios.get('localhost:3000/user');
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: {type: GraphQLInt},
      },
      resolve(parentValue, args) {
        axios.get('localhost:3000/api/projects') 
      }
    },
  },
});

module.exports = new GraphQLSchema({query: RootQuery});
