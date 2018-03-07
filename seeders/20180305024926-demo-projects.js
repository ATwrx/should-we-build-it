'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Projects', [{
        project_name: 'Should We Build it',
        project_desc: 'Website where developers can sound out ideas or gain interested parties',
        project_lang: 'Node.js',
        category: 'website',
        UserId: '2'

      },{
        project_name: 'Angry Letter / Letter of Complaint Generator',
        project_desc: 'Website which tailors letters based on the situation and level of irritation',
        project_lang: 'Node.js',
        category: 'website',
        UserId: '1'
      },{
         project_name: 'Trip tool / Travel wallet',
        project_desc: 'Carry tickets, recommendations and useful information with a new travel app',
        project_lang: 'Node.js',
        category: 'mobile app',
        UserId: '3'
      }], {});
  },
    

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Projects', null, {});
  }
};
