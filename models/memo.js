'use strict';
module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.STRING,
    id_user: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Memo.belongsTo(models.User, { foreignKey: 'id_user'});
      }
    }
  });
  return Memo;
};