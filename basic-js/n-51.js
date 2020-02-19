// Constructor Pattern
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
    this.draw = function () {
        console.log('I am a rectangle');
        this.printProperties();
        console.log(this);
    }
    this.printProperties = function () {
        console.log('My Width is: ' + this.width);
        console.log('My Height is: ' + this.height);
    }
}

var r1 = new Rectangle(15, 12);
r1.draw();
var r2 = new Rectangle(50, 20);
r2.draw();
function myNew(constructor) {
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}
console.log('-------------------------------');
//var r3 = myNew(Rectangle, 100, 200);
//r3.draw();

var Product = function (id, productName, price, supplier) {
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.supplier = supplier;
    this.show = function () {
        console.log('The Bultimore WareHouse!');
        this.display();
    }
    this.display = function () {
        date = new Date();
        console.log('Product ID: ' + this.id);
        console.log('Product Name: ' + this.productName);
        console.log('Price: ' + this.price);
        console.log('Supplier Name: ' + this.supplier);
        console.log(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`);
    }
   
}

var p1 = new Product('A-12E3', 'HP Laptop', 'USD-260', 'Michigun Brothers');
//p1.show();
var p2 = new Product('B-110OP2', 'Airpods', 'USD-125', 'Apple Store');
//p2.show();