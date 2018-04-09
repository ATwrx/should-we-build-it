var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
let db;

if (config.use_env_variable) {
  db = new Sequelize(process.env[config.use_env_variable], config);
} else {
  db = new Sequelize(config.database, config.username, config.password, config);
}

// Models
const UserModel = db.define('user', {
  id: {type: Sequelize.INTEGER},
  firstName: {type: Sequelize.STRING},
  lastName: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING},
});

const ProjectModel = db.define('project', {
  title: {type: Sequelize.STRING},
  summary: {type: Sequelize.STRING},
  text: {type: Sequelize.STRING},
  created: {type: Sequelize.NOW},
  rating: {type: Sequelize.INTEGER},
});

const CommentModel = db.define('comment', {
  text: {type: Sequelize.STRING},
  created: {type: Sequelize.NOW},
});

// Relations
UserModel.hasMany(ProjectModel);

ProjectModel.belongsTo(UserModel);
ProjectModel.hasMany(CommentModel);

CommentModel.belongsTo(ProjectModel);
CommentModel.hasOne(UserModel);

const User = db.models.user;
const Project = db.models.project;
const Comment = db.models.comment;

export {User, Project, Comment};
