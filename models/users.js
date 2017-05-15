'use strict';
module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    classMethods: {
      associate: function(models) {
        users.hasMany(models.mytodos, {foreignKey: 'id_user'})
      }
    }
  });
  return users;
};