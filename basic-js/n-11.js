// Modern Js - Class

function Animal(type,live){
    this.type = type;
    this.live = live;
  }
  
  class Human extends Animal{
    constructor(name){
      super('mamal',true);
        this.name = name;
    }
  }
  
  var x = new Human('anik');
  console.log(x);

//   Create Object From Null

var x = Object.create(null);
x.name = 'First';
console.log(x);

// Modern Js - Object Context this

var obj = {
  name : 'Mini',
  bark(){
    console.log(`My Cat ${this} says Miwao`);
  }
};
obj.bark();
var x = obj.bark;
console.log(obj.hasOwnProperty('bark'));
var y = x.bind('Tommy');
y();
x.apply('Jerry');
x.call('Minicat');