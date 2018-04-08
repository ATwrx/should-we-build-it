const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
// const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3001;

app.use('/graphql', expressGraphQL({
  schema:schema,
  graphiql:true,
}))
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());
// app.listen(PORT, () => {
//   console.log('Server is running on localhost:' + PORT)
// });

router.use(function(req, res, next) {
  // This is where middleware goes
  // could be an update, etc..
  console.log('Something is happening.');
  // This ensures Express.router continues looking for routes
  next();
});

// This is to make sure it works
// checked with GET http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({victory: 'We in this thang fam'});
});

//
// API routes
//

db.sequelize.sync({force: false});

app.listen(PORT);

router
  .route('/projects')
  .get(function(req, res) {
    db.Projects.findAll().then(query => {
      let filteredRes = query.map(p => {
        return {
          id: p.id,
          title: p.project_name,
          category: p.category,
          lang: p.project_lang,
          desc: p.project_desc,
          userId: p.UserId,
          createdDate: p.createdAt,
        };
      });
      res.send(filteredRes);
    });
  })

  // This will be the POST to create a new Project
  .post(function(req, res) {
    console.log(req)
    var title, desc, lang, category, user;
    db.Projects.create({
      project_name: title,
      category: category,
      project_desc: desc,
      project_lang: lang,
      UserId: user,
    });
  });

// Registers the routes && prefixes all routes with /api
app.use('/api', router);
