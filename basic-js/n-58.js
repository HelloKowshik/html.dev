// Calling Super With call Method
function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;              
}
function Shape(color) {             //Super Constructor
    this.color = color;
}

Shape.prototype.common = function () {
    console.log('I am common method!');
};

function Square(width,color) {
    this.width = width;
    Shape.call(this,color);
    //Shape.apply(this, [color]);
}
function Circle(radius,color) {
    this.radius = radius;
    Shape.call(this,color);
}
extend(Shape, Square);
extend(Shape, Circle);
Square.prototype.common = function () {
    console.log('I am calling From Square!');
}
Circle.prototype.common = function () {         //Method Overriding
    //Shape.prototype.common.call(this);
    console.log('I am calling From Circle!');
}
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;              
Square.prototype.draw = function () {
    console.log('Drawing');
};

var shape = new Shape('Black');
var sqr = new Square(45, 'blue');
var c = new Circle(5, 'red');
var shapes = [shape, sqr, c];
for (var i of shapes) {
    i.common();
}