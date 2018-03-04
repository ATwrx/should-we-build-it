module.exports = function(sequelize, DataTypes) {


	var Projects = sequelize.define('Projects', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
      	project_name: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            validate: { len: [1] }
        },

        project_desc: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            validate: { len: [1] }
        },

         project_lang: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            validate: { len: [1] }
        },

        category: {
        	type: DataTypes.ENUM('web app', 'website', 'mobile app', 'social media'),
        	allowNull: false

        },

        createdAt: { 

        	type: DataTypes.DATE,
        	defaultValue: DataTypes.NOW, 
        	allowNull: false 

        },


        updatedAt: { 

        	type: DataTypes.DATE,
        	defaultValue: DataTypes.NOW, 
        	allowNull: false 

        }


            });


    Projects.associate = function(models) {
    // A project can't be created without a user due to the foreign key constraint
    Projects.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  }
 	// Projects.associate = function(models) {
  //   // Associating user with comments
  //   // When a user is deleted, also delete any associated comments
  //   Projects.hasMany(models.Comments, {
  //     onDelete: "cascade"
  //   });
  // };
 
    return Projects;
 
}
