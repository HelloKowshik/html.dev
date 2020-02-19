var a = 'The';
var b = 'Phenomenal';
var test = '     ABCDE     ';
var c = a.concat(' ', b,' Forearm');
//console.log(c);
// console.log(c.substr(4, 11));
// console.log(c.startsWith('t'));
// console.log(c.endsWith('Forearm'));
//console.log(test.trim());
var d = c.split(' ');
//console.log(d);
var str = 'String Part Stack Learner';
var str1 = str.charAt(11);
//console.log(str1, typeof str1,Boolean(str1));

var length = 0;

while (true) {
    if (str.charAt(length) == '') {
        break;
    } else {
        length++;
    }
}
console.log('Total: ' + length);