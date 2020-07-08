// Date object : Date and time in javascript
let today = new Date()
//console.log(today)

let otherDate = new Date('June 23 1989 04:06:06')
//console.log(otherDate)

let otherDate1 = new Date('09/05/2001 5:5')
//console.log(otherDate1)

let day = otherDate1.getDay()
// 0-sun , 1-mon , 2-tue , 3-wed , 4-thu , 5-fri , 6-sat
// console.log(day)

let date = otherDate1.getDate()
// console.log(date)

let min = otherDate1.getMinutes()
// console.log(min)

let hours = otherDate1.getHours()
// console.log(hours)

let timestmap = otherDate1.getTime()
// console.log(timestmap)

let mili = otherDate1.getMilliseconds()
// console.log(mili)

let month = otherDate1.getMonth()
// console.log(month)

otherDate1.setDate(23)
otherDate1.setMonth(4)
otherDate1.setFullYear(1990)
otherDate1.setMinutes(1)
otherDate1.setHours(2)
otherDate1.setSeconds(5)
otherDate1.setMilliseconds(57)
console.log(otherDate1)
