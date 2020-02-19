// Functions Are Object

test(10, 2);
function test(a,b) {
    //console.log('Test String!');
}
//console.log(test.name, test.length);

var Func = new Function('width', 'height', `
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
`);
var f1 = new Func(10, 20);
//console.log(f1);
