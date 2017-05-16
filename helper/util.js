const changeDate = (date) => {
  var options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',hour:'numeric',minute:'numeric' };
  return date.toDateString().replace(/\s/,', ')+' '+date.toTimeString().substr(0,5)// +date.toUTCDateString();
  // Mon May 15 2017 10:43:46 GMT+0700 (WIB)
// Try it Yourself »

  // let month = date.getMonth();
  // return date;

  // return new Date(date).toLocaleDateString('ID', options)
  // console.log(new Date(date).toLocaleDateString('id-ID', options));
  // return new Date(date).toLocaleDateString('id-ID', options).toString().replace('.',':').replace(/\s(\d{2}\:\d{2})/,', $1');
}
module.exports = {
  changeDate
}