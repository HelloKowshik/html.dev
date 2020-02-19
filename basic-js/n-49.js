// OOJ-1
var rect = {
    width: 60,
    height: 50,
    draw: function () {
        this.printProperties();
    },
    printProperties: function () {
        console.log('I am a Rect');
        console.log('My Width is = ' + this.width);
        console.log('My Height is = ' + this.height);
    }
};
rect.draw();
var another = {
    width: 25,
    height: 52,
    print: rect.printProperties
}
another.print();
myFunc();
function myFunc() {
   // console.log(this);
    rect.printProperties();
}