// Complete Js

// Adding Array Elements

let arr = [1,'ssc',5,10];
arr.push('hsc',7,88);
arr.unshift('start');
arr.splice(1,0,'hello','wolrd');

// Array Element Remove

//arr.pop();
//arr.shift();
//arr.splice(1,2);

for(let i of arr){
  console.log(i);
}

// Finding Element

console.log(arr.indexOf('ssc'));
console.log(arr.includes('ssc'));

// Finding Reference Element

let home = [
    {
        id:1,
        brand: 'Nokia'
      },
      {
        id:3,
        brand: 'Nokia'
      },
    {
      id:2,
      brand:'Oppo'
    }
  ];
  
let r = home.findIndex(function(e){         //We Can Use find() Also .
  // console.log(e);
  return e.brand === 'Oppo';
});
console.log(r)

let r1 = home.filter(e=>
    e.brand === 'Nokia');
    console.log(r1)    

// Combining Array

let a1 = ['ssc','hsc'];
let a2 = ['BSc','MSc'];
let a3 = [1,2,3];
let all = a1.concat(a2,a3);
let combined = [...a1,...a2,...a3];
console.log(all,combined);

// Array to String , String to Array

let j = a1.join('-');
console.log(j,typeof j);
let str = 'puspo sumon fahim';
let arr1 = str.split(' ');
console.log(arr1,typeof arr1);

// Iterating Array

let newArr = [21,33,44,55];
let total=0;
newArr.forEach((element,index)=>{
  total+=element;
  return total;
});
console.log(total);


// Array Sorting-1

var num = [10,1,22,210,101,30];
var result = num.sort(
  (a,b)=>{
      return b-a;
      //return a-b;
    }
  );
console.log(result);


// Array Sorting-2

// var num = [10,1,22,210,101,30];
let num = [{
  id:1,
  name : 'Nokia'
},{
  id:3,
  name : 'iphone'
},{
  id:2,
  name : 'Xiaomi'
}];
var result = num.sort(
  (a,b)=>{
      //return b.id-a.id;
      //return a.id-b.id;
      return ((a.name.toLowerCase()>b.name.toLowerCase()) ? 1 : -1 )|| 0;
    }
  );
console.log(result);

// Array Reduce

let numbers = [2,5,7,9];
let nu = numbers.reduce((x,y)=>{
  console.log(x,y);
  return x+y;
},0);
console.log(nu);


// every() AND some()

let numbers = [2,4,6,7];
let nue = numbers.every(x=>{
  return (x%2==0) ? 1 : 0;
});
let nus = numbers.some(x=>{
  return (x%2!=0) ? 1 : 0;
});
console.log(nue,nus);

// map() with method chaining

let numbers = [7,6,4,2];
let nue = numbers.map(e=>{
  return e*e;
}).sort((a,b)=>{return a-b});
console.log(nue);
