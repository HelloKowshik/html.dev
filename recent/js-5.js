// Call Bind-2

function hello(c){
    console.log('Hello '+ this.x +' ' +c);
  }
  let c = {
     x: 'Guest',
  }
  hello.call(c,'Wellcome');

//   Apply() Method

function team(coach,cap){
    console.log(`${coach}-${cap}-${this.tn}`);
  }
  let bn = {
    tn : 'Bangladesh'
  }
  team.apply(bn,['Domingo','Mahmudullah']);

//   Bind () Method

function test(x){
    console.log(`${this} ${x}`);
  }

  test.bind('Bind Parameter').call('Echo','Cardiogram');


//   Example of Bind() with Function Expression

  let test1 = function(x){
    console.log(`${this} ${x}`);
  }.bind('Bind Param With Bind Method')
  
  test1.call('Echo','Cardiogram')
  
  
  function f(){
    console.log('Hello');
  }
  
  let func = f;
  func();