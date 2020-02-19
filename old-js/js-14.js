// Function-2

let product = ['Lenovo','Core-i3','4 GB/1 TB',33000];
let [name,spec,memory,price] = product;     //Array Destructuring
console.log(name,price,memory,spec)

let [id,...info] = product;
console.log(id);
for(let k of info){
    let j = '';
    j += k;
    console.log(j);
}

//first class function

function hello(e){
    console.log(e());
  }
  
  hello(()=>{
    return 'Shame on Bd';
  });

  function test(){      //callback function/higher order function
    return ()=>{
      return 'Hello World';
    }; 
  }
  console.log(test()());