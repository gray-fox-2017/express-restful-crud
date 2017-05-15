'use strict';
module.exports = function(sequelize, DataTypes) {
  var mytodos = sequelize.define('mytodos', {
    title: DataTypes.STRING,
    is_complete: DataTypes.STRING,
    createdAt: new Date(),
    updatedAt: new Date(),
    id_user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        mytodos.belongsTo(models.users, { foreignKey: 'id_user'});
      }

    }
  });
  return mytodos;
};