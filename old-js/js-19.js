// Array-3

let n1 = ['i','am','a','developer'];
let r1 = n1.join(' ');
console.log(r1);
let n2 = 'I, am, a, developer';
let r2 = n2.split(', ');
console.log(r2);

//Array Copy

let a1 = [2,3,4,5];
let copied = [...a1];
console.log(copied);
// let copied1 = a1.splice(0);
// console.log(copied1);
let copied2 = a1.slice(0,a1.length);
console.log(copied2);


//Empty an Array


let ar1 = ['a','n','i','k'];
let ar2 = ar1;
//ar1 = [];
//console.log(ar1);
//console.log(ar2);
ar1.length = 0;
console.log(ar1);
console.log(ar2);