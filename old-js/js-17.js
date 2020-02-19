// Array-1

let numbers = [2,3,4,5,6,10];
let stuff = 'manager';
numbers.push(11,12,13,stuff);                           //Ending insert
numbers.unshift('admin',1);                            //Beginning insert
numbers.splice(6,0,7,8,9);                            //Middle insert
for(let num of numbers){
    console.log(num);
}

let someNumber = [10,11,12,13,14,15,16,17];
//someNumber.pop();                                 //remove from end
//someNumber.shift();                              //remove from start
someNumber.splice(0,2);                           //remove from middle
for(let e of someNumber){
    console.log(e);
}

let searchNumber = [11,'admin','kohli',22,254,243];
//let txt = searchNumber.indexOf('admin');
let txt = searchNumber.includes('admin');
let result = (txt>0)? 'Found' : 'Not Found';
console.log(result);


// Array-2

let movies= [
  {
    id:1121,
    name:'war Zone',
    genere : 'Mix',
    year : 2019
  },
  
  {
    id:1123,
    name:'Bang Bang',
    genere : 'Action',
    year : 2017
  },
  
  {
    id: 1122,
    name : 'Housefull-4',
    genere : 'Comedy',
    year : 2019
  }
];

let f = movies.find(function(e){
  if('Action' == e.genere){
    return movies;
  }else{
    return 'Not Available';
  }
});
console.log(f);