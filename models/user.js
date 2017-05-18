'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value,next){
          User.find({
            where:{email:value}
          }).then(function(err){
            if(err){
              return next('email existed')
            } else {
            next()
            }
          })
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Todo,{foreignKey:'user_id'})
      }
    }
  });
  return User;
};