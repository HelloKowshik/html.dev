// Array-6

// Every and Some method

let arr = [3,5,7,8];
let res1 = arr.every((n)=>{
  return n%2!=0;
});
let res2 = arr.some(e=> e%2!=0);
console.log(res1);
console.log(res2);

// Array Map

let numbers = [2,3,4,5,6];
let result = numbers.map(n=>n*n).join(' ');
console.log(result);

let products = ['T-shirt','Orion',350];
let ul = '<ul>';
let r = products.map(e=> ul+=`<li>${e}</li>`).join(' ');
ul+='</ul>';
console.log(ul);
document.write(ul);