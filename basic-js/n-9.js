// call(),bind(),apply()

function test(a,b){
    console.log('Function Call');
    console.log('From this: '+this);
    console.log(a,b);
  }
  //var x = test.bind('Hello');
  //x(5,6);
  //test.call('Hello',5,6);
  test.apply('World',[10,20]);

//   Higher Order Function

function generate(data){
    if('plus'===data){
      return (a,b)=>a+b;
    }else if('minus'===data){
      return (a,b)=>{
        if(a>b)
          return a-b;
        else
          return b-a;
      };
    }else if('multiply'===data){
      return (a,b)=>a*b;
    }else if('div'===data){
      return (a,b)=>a/b;
    }
  }
  
  var x = generate('div');
  console.log(x(6,14));