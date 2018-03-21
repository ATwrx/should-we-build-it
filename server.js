const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./models');

// In dev requests are proxied from PORT 3000
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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

app.listen(PORT, function() {
  console.log('API running on port ' + PORT + '; the are proxied from PORT:3000');
});

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
    console.log('Post made', res)
    let title, desc, lang;
    db.Projects.create({
      project_name: title,
      project_desc: desc,
      project_lang: lang,
    });
  });

// Registers the routes && prefixes all routes with /api
app.use('/api', router);
