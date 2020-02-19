// Modern js-Object

var obj = {
    a: 'Hello World',
    b: 20
  }
  
  var obj1 = {
    a: 'Hello World',
    b: 20
  }
  var x = obj1;
  console.log(x.b='Damn',x);

  var x = {
    a : 'String',
    b : 10
  };
  
  var e = Object.create(x);
  e.a = 'Hello World';
  //delete(e.a);
  console.log(e.hasOwnProperty('a'));
  console.log(x,e)

//   Factory Pattern 

function CreateBill(table_no,waiter,bill){
    return {
      table_no : table_no,
      waiter : waiter,
      bill  : bill
    }
  }
  
  var b1 = CreateBill('L-1','Munir',4356);
  var b2 = CreateBill('L-3','Jahir',1256);
  console.log(b1,b2);

//   Constructor

function Bill(table_no,waiter,bill){
    this.table_no = table_no,
    this.waiter = waiter,
    this.bill = bill
}

var b1 = new Bill('L-1','Munir',4356);
var b2 = new Bill('L-3','Jahir',1256);
console.log(b1,b2);