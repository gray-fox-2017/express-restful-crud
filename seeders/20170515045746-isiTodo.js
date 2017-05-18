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
    return queryInterface.bulkInsert('Todos',
    [
      {title:'Mencari Angin', is_complete:1, user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {title:'Tidur Siang', is_complete:1, user_id:2,createdAt:new Date(),updatedAt:new Date()},
      {title:'Nonton film', is_complete:0, user_id:2,createdAt:new Date(),updatedAt:new Date()},
      {title:'Baca Buku', is_complete:1, user_id:3,createdAt:new Date(),updatedAt:new Date()},
      {title:'Main Kasti', is_complete:1, user_id:5,createdAt:new Date(),updatedAt:new Date()},
      {title:'Bangun Kastil', is_complete:0, user_id:4,createdAt:new Date(),updatedAt:new Date()},
      {title:'Jadi kuda', is_complete:0, user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {title:'Membantu Ibu', is_complete:0, user_id:1,createdAt:new Date(),updatedAt:new Date()},
      {title:'Berenang', is_complete:1, user_id:2,createdAt:new Date(),updatedAt:new Date()},
      {title:'Main Tenis', is_complete:0, user_id:3,createdAt:new Date(),updatedAt:new Date()},
      {title:'Mengambar', is_complete:0, user_id:5,createdAt:new Date(),updatedAt:new Date()},
      {title:'Mewarnai', is_complete:1, user_id:5,createdAt:new Date(),updatedAt:new Date()},
      {title:'Mencuri Uang', is_complete:0, user_id:2,createdAt:new Date(),updatedAt:new Date()}
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
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
