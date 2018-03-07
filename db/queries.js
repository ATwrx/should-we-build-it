 
	var db = require('../models');
	var sequelize = require('Sequelize');
	var bodyParser = require("body-parser");

		// db.Projects.findAll({}).then(function(data) {


		// 	console.log(data);

		// });

		db.Projects.findAll({}).then(function(res){

			var resArr = [];

			for (let i=0; i < res.length; i++) {

				resArr.push(res[i].dataValues);
	



		}

			console.log(resArr);



	});



	

//   router.get('/index', function(req, res) {
//     // findAll returns all entries for a table when used with no options
//     burgerdb.burgers.findAll({}).then(function(data) {
//       // access to the burgers as an argument inside of the callback function
//       var hbsObject = { burgers: data };
//     //render via handlebars
//     res.render('index', hbsObject);
//   });
// });


// getAllProjects();

// var Op = Sequelize.Op;

// db.Projects.findAll({}).then(console.log(data));

// SELECT * FROM post WHERE authorId = 2

// db.Projects.findAll({}).then(function(projects) {

// 	console.log(projects);
//   // Send array to view
// });