// Create routes
var express = require('express');
var router = express.Router();
var swbidb = require('../models');

// ----------------------------------------------------
// Index Redirect
router.get('/', function (req, res) {
  res.redirect('/index');
});


  //bring all the projects into the index page

  router.get('/index', function(req, res) {
    // findAll returns all entries for a table when used with no options
    swbidb.Comments.findAll({}).then(function(data) {
      // access to the burgers as an argument inside of the callback function
      var hbsObject = { burgers: data }; //needs pointing to whichever page
    //render via handlebars
    res.render('index', hbsObject);
  });
});


//create a new burger

  router.post('/project/create', function(req, res) {
 
    swbidb.Projects.create({
        project_name: $("#projectname").val().trim(),
        project_desc: $("#projectdesc").val().trim(),
        project_lang: $("#projectlang").val().trim(),
        category: $("#category").val().trim(),
        UserId: // how to source and link this
    }).then(function(data) {

      res.redirect('/index');
    });
  });
      

  router.post('/burger/eat/:id', function( req, res ) {


swbidb.burgers.update({devoured: true},
        {where: {id: req.params.id}})
        .then(function (data) {
            res.redirect('/index');;

          });
      });



// ----------------------------------------------------


// Export routes
// module.exports = router;