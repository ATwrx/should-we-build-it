'use strict';

module.exports = function(sequelize, DataTypes) {


	var Comments = sequelize.define('Comments', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
      	comment: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false,
            validate: { len: [1] }
        },

        createdAt: {
             type: DataTypes.DATE,
             defaultValue: DataTypes.NOW,
             allowNull: false,

        }, 

        user_id: {
        
             type: DataTypes.INTEGER,
             allowNull: false
        }


    });

       Comments.associate = function (models) {
    models.Comments.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

        Comments.associate = function (models) {
    models.Comments.belongsTo(models.Projects, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };



 
    return Comments;
 
}