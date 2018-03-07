import db from '../models'

export function allProjects() { //brings back all the projects
  db.Projects.findAll({}).then(function(res){
  	var resArr = [];
  	for (let i=0; i < res.length; i++) {
  		resArr.push(res[i].dataValues);
  }
	console.log(resArr);
  });
};

export function readComments(p_id) {
 //brings back comments assigned by projectID
  db.Comments.findAll({
		where: {
			ProjectID: p_id
		}
  }).then(function(res){
	var resArr = [];
	for (let i=0; i < res.length; i++) {
		resArr.push(res[i].dataValues);
  }
	console.log(resArr);
  });
};

export function addProject(p_name, p_desc, p_lang, p_category, p_user_id){
	//---------------------------------------//
	//
	// var project_name = "cheese app";
	// var project_desc = "to use crowdsourcing to locate the best cheese in town";
	// var project_lang = "PHP";
	// var category = 'social media'  || 'web app' || 'website'|| 'mobile app'
	// var UserId = "5";
	//----------------------------------------//
	db.Projects.create({
		project_name: p_name,
		project_desc: p_desc,
    project_lang: p_lang,
    category: p_category,
    UserId: p_user_id
}).then(function(res) {
		allProjects();
  });
};

export function deleteComment(c_id) {
	db.Comments.destroy({
	where: { id: c_id }
}).then(function(res) {
    console.log(res);
		// readComments(p_id);
	});
};

// export function editComment(id) {
// 	let newComment {
// 		comment: newComment
// 	};
// 	db.Comments.update(newComment, {where: { id: id } })
// 	.then(function(res) {
// 		readComments(res.projectId);
// 	});
// };

export default {
 allProjects, addProject,
}
