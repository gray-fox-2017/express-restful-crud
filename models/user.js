'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Memo, {foreignKey: 'id_user'})
      }
    }
  });
  return User;
};