'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    let arr =[
      {
        email:'james@haha.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:'rachel@haha.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Users',arr, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
