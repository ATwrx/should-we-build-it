'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

       return queryInterface.bulkInsert('Votes', [{
        vote: 'up',
        UserId: '2',
        ProjectId: '1'

      },{
        vote: 'up',
        UserId: '1',
        ProjectId: '1'

      },{
        vote: 'up',
        UserId: '3',
        ProjectId: '1'

       },{
        vote: 'down',
        UserId: '2',
        ProjectId: '2'


      },{
        vote: 'down',
        UserId: '3',
        ProjectId: '2'

      },{

        vote: 'up',
        UserId: '1',
        ProjectId: '3'

      },{

        vote: 'up',
        UserId: '2',
        ProjectId: '3'

         }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Votes', null, {});
  }
};
