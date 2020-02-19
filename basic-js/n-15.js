// Modern Js- Math Object

// function getArea(r){
//   return Math.PI*Math.pow(r,2);
// }
// console.log(getArea(2));

let arr = [2,5,7,11,6,15];
console.log(Math.max.apply(null,arr));
let n = 2.49;
console.log(Math.floor(n),Math.ceil(n));
console.log(Math.round(n))
let x = 5 + Math.round(Math.random()*10);
console.log(x);

// Modern Js - Date Object

let da = new Date();
let date = new Date('2018-02-19 10:33:34');
let d = new Date(1575267661358);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(Date.now());
console.log(d.toDateString(),d.toTimeString());
var x1 = da.getHours();
var y = da.getMinutes();
var z = da.getSeconds();
var year = da.getFullYear();
var month = da.getMonth();
console.log(x1,y,z,year,month);

let dat = new Date();
dat.setDate(15);
dat.setHours(6);
dat.setYear(2015);
dat.setMonth(3);
console.log(dat.toDateString(),dat.toTimeString());
console.log(dat.toUTCString());

// Timer Function

var t = setTimeout(()=>{console.log('Hello')},3000);
//clearTimeout(t);
var t1 = setInterval(()=>{console.log('World')},2000);
//clearInterval(t1);
