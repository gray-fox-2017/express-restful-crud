'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Todo.belongsTo(models.User,{foreignKey: 'user_id'});
      }

    }

  });
  return Todo;
};