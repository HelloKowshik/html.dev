// Array Manipulation (beginning js)

var std = ['tanvir','fahim','sumon'];
var ex = ['Emon','amena'];
std.push('rifat','muntasir');
std.unshift('sumaiya-hsc','sumaiya-ssc');
//console.log(std);
var l = std[1];
ex.push(l);
delete(std[1]);
console.log(std);

console.log(ex);

// Array Slice() AND Splice()

var days=['sat','sun','mon','tue','wed','thu','fri'];
var chunk = days.slice(-4,-1);
console.log(days,chunk);
console.log('--------------------');

var chunk1 = days.splice(-4,3);
console.log(days,chunk1)


// Array Copy

var days=['sat','sun','mon','tue','wed','thu','fri'];
var holiDays = Array.from(days);
holiDays[0] = 'Saturday';
console.log(days,holiDays);

// Adding two Arrays

var d1 = ['sat','sun','mon',''];
var d2 = ['tue','wed','thu','fri'];
var days = d1.concat(d2);
console.log(days);

