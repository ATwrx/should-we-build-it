'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [{
        firstName: 'Mike',
        lastName: 'Fields',
        username: 'mijofields',
        email: 'mikefields81@gmail.com',
        password: 'abc123'
      },{
        firstName: 'Andrew',
        lastName: 'Thompson',
        username: 'ATwrx',
        email: 'athomspon@email.com',
        password: '123abc'
      },{
        firstName: 'Armando',
        lastName: 'Robles',
        username: 'RioMando',
        email: 'arobles@email.com',
        password: 'nopassword'
        },{
        firstName: 'Ledley',
        lastName: 'King',
        username: 'deadlyLedley',
        email: 'ledley@king.com',
        password: 'COYS'
        },{
        firstName: 'Vince',
        lastName: 'Lombardi',
        username: 'v1nce',
        email: 'vince@email.com',
        password: '112233'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});

  }
};
