// factory Pattern

// var rect = function (width, height) {
//     return {
//         width,
//         height,
//         draw: function () {
//             console.log('I am Rectengle');
//             this.printData();
//             console.log(this);
//         },
//         printData: function () {
//             console.log('My Width is: ' + this.width);
//             console.log('My Height is: ' + this.height);
//         }
//     }
// }

// var r1 = rect(10, 8);
// r1.draw();
// var r2 = rect(20, 15);
// r2.draw();

var course = function (id, name, price) {
    return {
        id, name, price,
        info: function () {
            console.log('All About Our Courses!');
            this.show();
        },
        show: function () {
            console.log('Course ID: ' + this.id);
            console.log('Course Name: ' + this.name);
            console.log('Course Price: ' + this.price);
            console.log('Thanks For taking This Course!');
        }
    }
}

var c1 = course('WD-112', 'Mastering PHP', 3999);
c1.info();
var c2 = course('GD-101', 'Graphics Desing Basic', 1299);
c2.info();