'use strict'

module.exports = {
  formatDate: function(date){
    var dateFormat = require('dateformat');
    return (date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
  }
}
