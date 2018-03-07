module.exports = function(sequelize, Sequelize) {

var Users = sequelize.define('users', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true,
            allowNull: false
        },
        username: {
            type: Sequelize.TEXT
        },
 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        }
 
 
    });
 
    return User;
 
}









