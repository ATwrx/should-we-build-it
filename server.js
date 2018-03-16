const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//console.log(project.project_name);
//console.log(project.project_desc);
//console.log(project.project_lang);
//console.log(project.User.firstname + ' ' + res[0].User.lastname);

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    app.get('/api', () => {
      db.Projects.findAll().then(res => {
        let resObj = res.map(val => {
          return {
            id: val.id,
            title: val.project_name,
            category: val.category,
            lang: val.project_lang,
            desc: val.project_desc,
            userId: val.UserId,
            createdDate: val.createdAt,
          };
        });
        console.log(resObj);
        return res;
      });
    });
  });
});
