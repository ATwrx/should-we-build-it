const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/*function allProjects() {*/
//db.Projects.findAll({
//include: [
//{
//model: db.Users,
//},
//],
//}).then(res => {
//console.log(res);
//let projects = () => {

/*for (let project of res) {*/
//console.log('-------------------------------------');
//console.log(project.project_name);
//console.log(project.project_desc);
//console.log(project.project_lang);
//console.log(project.User.firstname + ' ' + res[0].User.lastname);
/*}*/
/*}*/
//});
/*};*/

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    app.get('/api', () => {
      db.Projects.findAll().then(projects => {
        projects.forEach(project => {
          let projectArr = {};
/*          console.log(project.dataValues);
          console.log(project.project_name);
          console.log(
            '=============================================================',
          ); */
          projectArr = project.dataValues;
          console.log(projectArr)
          return projectArr;
        });
      });
    });
  });
});
