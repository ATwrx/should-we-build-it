const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  // GraphQLList,
  // GraphQLNonNull,
  GraphQLID,
} = require('graphql');

// Hard Coded Sample Data
// const users = [
//   {
//     id:  0 ,
//     name: 'Andrew Thompson',
//     userName: 'samplename',
//     email: 'super@duper.com',
//   },
//   {
//     id: 1,
//     name: 'John Doe',
//     userName: 'jd',
//     email: 'johnyy@john.com',
//   },
//   {
//     id: 2,
//     name: 'Loo Pee',
//     userName: 'Lowpee',
//     email: 'loo@pee.com',
//   },
// ];

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
    id: {type: GraphQLString},
    project_name: {type: GraphQLString},

  })
});
// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        id: {type: GraphQLString},
      },
    },
    project: {
      type: ProjectType,
      args: {
        id: {type: GraphQLID}
      },
      resolve(parentValue, args) {
        axios.get('/projects')
      }
    },
  },
});

module.exports = new GraphQLSchema({query: RootQuery});
