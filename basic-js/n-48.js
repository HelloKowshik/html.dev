// Closure A Deep Look

// Closure is when a function
// is able to remember & access it's lexical scope 
// when that function executing outside it's lexical scope

function test() {
    var msg = 'Closure & Lexical Scope';
    // function print() {
    //     console.log(msg);
    // }
    // print();
    return function () {
        console.log(msg);
    }
}
var print = test();
//console.log(print);
//print();

// for (var i = 1; i <= 5; i++){
//     setTimeout(function () {
//         console.log(i);
//      }, 1000 * i);
// }

// IIFE

for (var i = 1; i <= 5; i++){
    (function (n) {
        setTimeout(function () { 
            console.log(n);
        }, 1000 * n);
    })(i);
}