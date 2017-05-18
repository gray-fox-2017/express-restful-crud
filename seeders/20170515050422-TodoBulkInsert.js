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
    return queryInterface.bulkInsert("Todos", [{
      task: "Coba",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "Coba lagi",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "jangan coba coba",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "mau apa?",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "ketawa terbahak-bahak",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "nangin tersedu-sedu",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "melek terkantuk-kantu",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "berlari di pagi hari",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "memandang surya menikmati dunia",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "menjalai hidup dengan optimis",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "selalu sigap mengatasi masalah",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "minum 3liter",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "cuci motor",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "kasih makan kucing",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "buang sampah rumah",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Todos', null, [{
      task: "Coba",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "Coba lagi",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "jangan coba coba",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "mau apa?",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "ketawa terbahak-bahak",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "nangin tersedu-sedu",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "melek terkantuk-kantu",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "berlari di pagi hari",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "memandang surya menikmati dunia",
      is_complete: false,
      user_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "menjalai hidup dengan optimis",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "selalu sigap mengatasi masalah",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "minum 3liter",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "cuci motor",
      is_complete: false,
      user_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "kasih makan kucing",
      is_complete: false,
      user_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      task: "buang sampah rumah",
      is_complete: false,
      user_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  }
};
