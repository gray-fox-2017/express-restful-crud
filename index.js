
const db = require('./models')

function newList(obj) {
  db.Todo.create(obj)
  .then(() =>{
    console.log("New list Added!");
  })
  .catch((err) => {
    console.log(err);
  })
}