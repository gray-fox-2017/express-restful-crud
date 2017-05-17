var moment = require('moment')

module.exports = {
  datesformate: (date)=>{
    return moment(date).format('dddd, D MMM YYYY, h:mm')
  }
}
