// Prototypical Inheritence
// shape->Shape->Object
// sqr->Square->Object
// sqr->Square->Shape->Object

function Shape() {
    
}
// Shape.prototype = {
//     common: function () {
//         console.log('I am common method!');
//     }
// };
Shape.prototype.common = function () {
    console.log('I am common method!');
};
function Square(width) {
    this.width = width;
}
function Circle() {
    
}
Circle.prototype = Object.create(Shape.prototype);
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;              //Reset Constructor
Square.prototype.draw = function () {
    console.log('Drawing');
};

var shape = new Shape();
var circle = new Circle();
var sqr = new Square(45);