'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Comments', [{
        comment: 'I think this project would be super valuable, I would use it',
        userId: '1',
        ProjectId: '1'        

      },{
        comment: "I'm not so sure about this one, don't really see the use",
        userId: '3',
        ProjectId: '2'
      },{
      comment: "I like this idea for a travel app - having everything in one place would be great",
        userId: '2',
        ProjectId: '3'
      }], {});
  },


  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
