// Looping with Array

let ar = [10,13,11,24,17];
let len = ar.length
for(let i = 0; i<len; i++){
  console.log(ar[i]);
}
console.log("=================");

let a = [10,13,11,24,17];
let l = a.length;
let i = 0;
do{
  console.log(a[i]);
  i++;
}while(i<l);

// for of - use for array looping

let br = [10,13,11,24,17];
for(let v of br){
  console.log(v);
}

// for in - use for object looping

let team = {
    'openar' : 'Naim-Liton',
    'keeper' : 'Musfiqur Rahim',
    'pacer'  : 'Mustafiz-Al Amin-Safiul',
    'spiner' : 'Aminul'
  };
  for(let e in team){
    console.log(e+': '+team[e]);
  }