'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */


    return queryInterface.bulkInsert('Users',
    [
      {email:'geralt@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'hugo@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'noctis@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'piere@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'hasshasshin@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'user@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'sabbah@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'rin@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'len@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'arthur@gmail.com',createdAt:new Date(),updatedAt:new Date()},
      {email:'hassan@gmail.com',createdAt:new Date(),updatedAt:new Date()}
    ],
      {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
