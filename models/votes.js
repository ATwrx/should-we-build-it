module.exports = function(sequelize, DataTypes){


	var Votes = sequelize.define('Votes', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
 
      	vote: {
            type: DataTypes.ENUM('up', 'down'),
            allowNull: false,
            notEmpty: true
        }



            });


    Votes.associate = function(models) {
    // A vote can't be created without a user due to the foreign key constraint
    Votes.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };


    Votes.associate = function(models) {
    // A vote can't be created without a project due to the foreign key constraint
    Votes.belongsTo(models.Projects, {
      foreignKey: {
        allowNull: false
      }
    });
  }
 
return Votes;
 
}