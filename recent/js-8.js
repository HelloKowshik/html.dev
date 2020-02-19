// Closures

function makeArray(){
    const arr = [];
    for(var i = 0; i<5; i++){
      arr.push(function(){console.log(i);});
    }
    console.log(i);
    return arr;
  }
  
  const a = makeArray();
  a[0]();

//   IIFE /Immediately Invoked Function Expression

const sayHello = (function(){
    var message = 'Hello World';
    function sayHello(){
      console.log(message);
    }
    return sayHello;
  })();
  
  console.log('Typeof Message:'+ typeof message);
  console.log(sayHello.toString());
  sayHello();

  const counter = (function(){
    let count = 0;
    return {
      inc : function(){count++;},
      get : function(){console.log(count);}
    }
  })();
  
  counter.inc();
  counter.inc();
  counter.get();