module.exports = {
  dateParser(date) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    let day = days[date.getDay()]
    let month = months[date.getMonth()];
    let hour = date.getHours();
    if(hour<10) hour = '0' + hour;
    let minute = date.getMinutes();
    if(minute<10) minute = '0' + minute;

    let string = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}, ${hour}:${minute}`
    return string;
  }
};
