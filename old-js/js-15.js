//Function -3
//function expression vs function statement

//function statement
console.log(sayHi());
function sayHi(){
    return 'Function Statement';
}
console.log(sayHi());


//function expression

//console.log(say());
let say = ()=>{
    return 'Function Expression';
};
console.log(say());

//hoisting

//console.log('before '+e);
let e = 'hello';
console.log('After '+e);
console.log('Before-'+bn());

function bn(){
  return 'FUNCTION';
}

console.log('After-'+bn());

//console.log('Before-'+au());

let au = ()=>{
  return 'Expression';
}

console.log('After-'+au());

//Scope

let e = 'heading';
function out(){
    let e = 'h1';
    return function inner(){
      let e = 'h2';
      console.log(e);
    }
  }
  out()();

  //let vs var vs const

   {
    var e = 'heading'; 
   }
   console.log(e);
   
   for(var i =0; i<5; i++){
     console.log(i);
   }
   console.log('i is: '+i);

   //rest vs spread operator

   //rest operator

   function product(name,...all){
    console.log(name);
    console.log(all);
    return `${name} | ${all[0]}`;
  }
  let b = product('rin','500gm','washing powder',450);
  console.log(b);

  let p = ['rin','500gm','washing powder',450];
  let cp = [...p];
  console.log(cp);

  //spread operator

let std = {
    name: 'abrar fahad',
    id : 112233,
    show(){
        return `${this.name} | ${this.id}`;
    }
}

function getInfo(std){
    console.log(std);
}

getInfo({...std});