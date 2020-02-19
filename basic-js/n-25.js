// var date = new Date();
// console.log(date);
// console.log('Date String: '+date.toDateString());
// console.log('Local Time String: '+date.toLocaleTimeString());
// console.log('Time String: ' + date.toTimeString());
// console.log('Local String: ' + date.toLocaleString());
// console.log('Full Year: ' + date.getFullYear());
// console.log('Hours: ' + date.getHours());
// console.log('Month: ' + date.getMonth());
// console.log('Seconds: ' + date.getSeconds());
// console.log('Date: ' + date.getDate());

var n = 11;
var str = (n % 2 == 0) ? 'EVEN' : 'ODD';
//console.log(str);
var name = 'Saved Name';
var fullName = name ? name : 'Test Name';
console.log(fullName);

var name1 = '';
var fullName1 = name1 || 'Real Name';
console.log(fullName1);
