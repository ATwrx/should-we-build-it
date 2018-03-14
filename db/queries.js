const db = require('../models');

// Brings back all the projects and user info
function allProjects() {
  db.Projects.findAll({
    include: [
      {
        model: db.Users,
      },
    ],
  }).then(res => {
    for (let project of res) {
      console.log('-------------------------------------');
      console.log(project.project_name);
      console.log(project.project_desc);
      console.log(project.project_lang);
      console.log(project.User.firstname + ' ' + res[0].User.lastname);
    }
  });
}

function readComments(projectId) {
  //brings back comments assigned by projectID and user info
  db.Comments.findAll({
    where: {
      ProjectID: projectId,
    },
    include: [
      {
        model: db.Users,
      },
    ],
  }).then(function(res) {
    var resArr = [];
    for (let i = 0; i < res.length; i++) {
      resArr.push(res[i].dataValues);
    }

    console.log('-------------------------------------');
    console.log(resArr[0].comment);
    console.log(resArr[0].User.firstname + ' ' + resArr[0].User.lastname);
  });
}

/*function addProject() {
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
    UserId: UserId,
  }).then(function(res) {
    allProjects();
  });
}*/

function deleteComment(id) {
  db.Comments.destroy({
    where: {id: id},
  }).then(function(res) {
    readComments(projectId);
  });
}

function editComment(id) {
  var newComment = {
    comment: newcomment,
  };

  db.Comments.update(newComment, {where: {id: id}}).then(function(res) {
    readComments(ProjectID);
  });
}

allProjects();
//readComments(1);
// addProject();
// deleteComment(4);
//editComment(3);
