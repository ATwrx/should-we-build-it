'use strict';

module.exports = function(sequelize, DataTypes) {

var Users = sequelize.define('Users', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
        firstname: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
 
        lastname: {
            type: DataTypes.STRING,
            notEmpty: true,
            allowNull: false
        },
        username: {
            type: DataTypes.TEXT,
            allowNull: false
        },
 
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()'),
            allowNull: false
        },

        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('now()'),
            allowNull: false
        }
 
 
    });

  Users.associate = function(models) {
    // Associating user with comments
    // When a user is deleted, also delete any associated comments
    Users.hasMany(models.Comments, {
      onDelete: "cascade"
    });
  };

  Users.associate = function(models) {
    // Associating users with projects
    // When an Author is deleted, also delete any associated projects
    Users.hasMany(models.Projects, {
      onDelete: "cascade"
    });
  };

  Users.associate = function(models) {
    // Associating users with votes
    // When an user is deleted, also delete any associated votes
    Users.hasMany(models.Votes, {
      onDelete: "cascade"
    });
  };
 
 
    return Users;
 
}









