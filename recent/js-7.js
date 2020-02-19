// Object Mutating by CS-50 EdX

const o ={
  a : 'a',
  b : 'b',
  obj :{
    key : 'Key'
  }
};

//Shallow Copy

const o2 = Object.assign({},o);
//o2.obj.key = 'New Value';
//console.log(o.obj.key);

// Deep Copy

function deepCopy(obj){
  const keys = Object.keys(obj);
  const newObject = {};
  for(let i =0; i<keys.length; i++){
    const key = keys[i];
    if(typeof obj[key] === 'object'){
      newObject[key] = deepCopy(obj[key]);
    }else{
      newObject[key] = obj[key];
    }
  }
  return newObject; 
}

const o3 = deepCopy(o);
o.obj.key = 'New Key';
console.log(o3.obj.key);