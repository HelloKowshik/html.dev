// Complete Js

// Function

function mi9ccpro(){
    let data = '';
    for(let e of arguments){
      data+=e +' ';
    }
    return data;
  }
  
  console.log(mi9ccpro('xiaomi','SD-855','6/64',40000));

// Rest Operator

function mi9ccpro(id,...all){
    return `${id} ${all}`;
  }
  
  console.log(mi9ccpro('SE-1121','xiaomi','SD-855','6/64',40000));

// default Value

function subjects(ban,eng,ict,geo,phy=null,che=null,math=null){
    console.log(ban,eng,ict,geo,phy,che,math);
  }
  subjects(45,54,51,46);

//   Arrow Function

let add1 = (n1,n2)=>{return n1+n2};
console.log(add1(2,3));

// Array Destructuring

let mobile = ['SR-112','mi9cc',40000,'6/128','SD-730','FAST CHARGING'];
let [sr,model,...data] = mobile;
console.log(sr,model,data);

// Object Destructring

let productMobile = {
    name: 'xiaomi',
    model : 'MI9CC',
    cpu : 'SD-730',
    ram : '4/6/8/12 GB',
    rom : '64/128/256 GB'
  }
  let {name,model,...others} = productMobile;
  console.log(name,model,others);


// spread Operator

let p = {
  a : 'AA',
  b : 'NB',
  show(){
    return `${this.a} ${this.b}`;
  }
}
function check({a,b,show}){
  console.log(p.show());
}
check({...p});


  