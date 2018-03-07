 
	var db = require('../models');
	var sequelize = require('Sequelize');
	var bodyParser = require("body-parser");

		


	function allProjects() { //brings back all the projects

		db.Projects.findAll({}).then(function(res){

			var resArr = [];

			for (let i=0; i < res.length; i++) {

				resArr.push(res[i].dataValues);
		}

			console.log(resArr);
	});
	};

		function readComments(projectId) { //brings back comments assigned by projectID


		db.Comments.findAll({

				where: {

					ProjectID: projectId
				}

		}).then(function(res){

			var resArr = [];

			for (let i=0; i < res.length; i++) {

				resArr.push(res[i].dataValues);
		}

			console.log(resArr);
		});
		};


				function addProject(){

					//---------------------------------------//
					//
					// var project_name = "cheese app";
					// var project_desc = "to use crowdsourcing to locate the best cheese in town";
					// var project_lang = "PHP";
					// var category = 'social media'  || 'web app' || 'website'|| 'mobile app'
					// var UserId = "5";
					//----------------------------------------//

			db.Projects.create({
      					project_name: project_name,
      					project_desc: project_desc,
					    project_lang: project_lang,
					    category: category,
					    UserId: UserId
    })
    .then(function(res) {
     	
    		allProjects();
    });
  };


  			function deleteComment(id) {

  				db.Comments.destroy({  
  				where: { id: id }
			})
				.then(function(res) {
     	
    		readComments(projectId);
    	});
  };

  		function editComment(id) {


  			var newComment = {  
  				comment: newComment
					};

					db.Comments.update(newComment, {where: { id: id } })  
				.then(function(res) {
     	
    		readComments(projectId);
    	});
  };


  		

 
	// allProjects();
	// Comments(1);
	// addProject();
	// deleteComment(5);
	// editComment();
