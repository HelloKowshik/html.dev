// Functions in  Beginning Js

function revStr(data){
    var rev = data.split('').reverse().join('');
    return rev;
  }
  
  let sentence = 'Hello World';
  let res = revStr(sentence);
  console.log(res);
  
  
//function using spread operator

function addStudents(arr,...data){
  for(let i = 0; i<data.length;i++){
    arr.push(data[i]);
  }
}
var students = [];
addStudents(students,'hasib','sumon','Risab');
addStudents(students,'fahim','male',123);
addStudents(students,'varma',NaN,null,undefined);
addStudents(students,'sima','rakhi','sabnam');
function totalStudents(std){
  for(let i in std){
  console.log(i+' : '+std[i]);
}
console.log('Total Students: '+std.length);
}
totalStudents(students)