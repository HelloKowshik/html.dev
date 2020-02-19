// Prototype

function Person(name) {
    this.name = name;
}
Person.prototype.PI = 3.1416;
var p1 = new Person('anik');
var p2 = new Person('rahman');
//console.log(Object.getPrototypeOf(p1));
// console.log(p1.__proto__);
// console.log(Person.prototype);
//console.log(p1);
//console.log(p2);

// Instance vs Prototype Members
 
function Square(width) {
    this.width = width;             //Instance Members
    // this.draw = function () {
    //     console.log('Draw');
    // }
    this.getWidth = function() {
        //this.draw();
        console.log('Width is =' + this.width);
    }
}
Square.prototype = {
    draw: function () {             //Prototype Members    
        this.getWidth();
        console.log('Draw Square');
    },
    toString: function () {
        return 'My Width is= ' + this.width;
    }
};
var sqr1 = new Square(10);
var sqr2 = new Square(5);
console.log(Object.keys(sqr1));
for (var i in sqr1) {
    console.log(i);
}