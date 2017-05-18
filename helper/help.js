function dater(date){
  let a = new Date(date)
  let b = a.toUTCString()
  let c = b.slice(0,-7)
  let d = c.split(',')
  let e = []
  switch(d[0]) {
    case 'Sun':
        e.push("Sunday");
        break;
    case 'Mon':
        e.push("Monday,");
        break;
    case 'Tue':
        e.push("Tuesday");
        break;
    case 'Wed':
        e.push("Wednesday");
        break;
    case 'Thu':
        e.push("Thursday");
        break;
    case 'Fri':
        e.push("Friday");
        break;
    case 'Sat':
        e.push("Saturday");
  }
  e.push(d[1])
  e=e.join('')
  let f = e.split('')
  f.splice(-6,0,',')
  return f.join('')
}
// console.log(dater(new Date()));

module.exports = {
  dater
};