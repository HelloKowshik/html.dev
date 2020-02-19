// Private Properties

var Rectangle = function (width, height) {
    var position = {
        x: 40,
        y: -35 
    }
    this.width = width;
    this.height = height;

    // this.getPosition = function () {
    //     return position;
    // }

    Object.defineProperty(this, 'position', {
        get: function () {
            return position;
        },
        set: function (value) {
            position = value;
        }
    });

    var printProperties = function () {
        console.log('My Width is: ' + this.width);
        console.log('My Height is: ' + this.height);
    }.bind(this);

    this.draw = function () {
        console.log('I am Rectangle');
        printProperties();
        console.log(`Position-x: ${position.x} Position-Y: ${position.y}`);

    }
}
var r1 = new Rectangle(10, 20);
//r1.draw();
//console.log(r1.getPosition());
//console.log(r1.position);
r1.position = {
    x: 340,
    y: 304
};
console.log(r1.position);