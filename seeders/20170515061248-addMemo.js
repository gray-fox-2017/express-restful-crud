'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    let arr = [{
        title: 'Makan',
        is_complete: false,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Masak',
        is_complete: true,
        id_user: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]
    return queryInterface.bulkInsert('Memos', arr, {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Memos', null, {});
  }
};
