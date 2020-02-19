// Array-5

let movies= [
  {
    id:2,
    name : 'War'
  },
  {
    id:1,
    name : 'houseful-4'
  },
  {
    id:3, 
    name : 'Bala'
  }
];
let r2 = movies.sort(function(a,b){
  return (a.name.toLowerCase>b.name.toLowerCase ? 1:-1) || 0;
});
console.log(r2);

// Array Reduce

let ar = [2,3,4,5];
let res = ar.reduce((acc,cur)=>{
  return acc+cur;
},10);                                          //10 is default value
console.log(res);