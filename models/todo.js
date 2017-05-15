'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    task: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User, {
          foreignKey: 'user_id'
        })
      }
    }
  });
  return Todo;
};