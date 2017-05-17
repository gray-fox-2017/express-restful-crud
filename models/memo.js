'use strict';
module.exports = function(sequelize, DataTypes) {
  var Memo = sequelize.define('Memo', {
    title: DataTypes.STRING,
    is_complete: DataTypes.BOOLEAN,
    id_user: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       Memo.belongsTo(models.User,{foreignKey:'id_user'})
     },
     listMemo: function (callback){
       sequelize.query('select "Memos".*,"Users".email from "Memos" left join "Users" on "Memos".id_user = "Users".id', { type: sequelize.QueryTypes.SELECT})
       .then (memos=>{
        callback(memos)
       })
       .catch(err=>{
         console.log(err);
       });
     }
    }
  });
  return Memo;
};
