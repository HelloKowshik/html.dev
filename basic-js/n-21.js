// Complete Js

// Object Copy-1

let obj1 = {
    id : 112,
    dep : 'CSE'
  }
  let obj2 = {};
  for(let i in obj1){
    obj2[i] = obj1[i];
  }
  console.log(obj2,obj1);
  obj2.dep = "EEE";
  console.log(obj2,obj1);


// Object Copy-2 

let obj3 = Object.assign({branch:"GEC"},obj1);
console.log(obj3,obj1);

// Object Copy-3

let obj4 = {...obj1,branch:'BL-2'};
console.log(obj4,obj1);
