'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Todo,{foreignKey: 'user_id'});
        // User.hasMany(models.Todo,{foreignKey: 'id'});
      }
    }
  });
  return User;
};