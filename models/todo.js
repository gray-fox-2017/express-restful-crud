'use strict';
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
    email_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Todo.belongsTo(models.User, {foreignKey : "email_id"})
      }
    }
  });
  return Todo;
};
