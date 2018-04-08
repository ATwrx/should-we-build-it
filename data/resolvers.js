import {User, Project, Comment} from './connectors';

const resolvers = {
  Query: {
    user(_, args) {
      return User.find({where: args});
    },
    project(_, args) {
      return Project.findOne({where: args});
    },
    allProjects(_, args) {
      return Project.findAll();
    },
  },
  User: {
    projects(user) {
      return User.getProjects();
    },
  },
  Project: {
    comments(project) {
      return Project.getComments();
    },
  },
  Comment: {
    user(comment) {
      return Comment.getUser();
    },
  },
};

export default resolvers;
