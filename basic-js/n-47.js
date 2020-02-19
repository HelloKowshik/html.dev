var x = 10;
function test() {
   // console.log(x);
    //x = 15;
}
test();
//console.log('x is=' + x);

// Creational Phase
// 1. x = undefined
// 2. test = ref

// Executional Phase
// 1. x = 10
// function call

// nested Scoping

var a = 23;
function inside1() {
    //console.log('inside1= '+a);
    function inside2() {
        var b = 33;
        //console.log('inside2= ' + b);
        function inside3() {
            //console.log('B= ' + b);
        }
        inside3();
    }
    inside2();
}
inside1();
var a = 11;
function A() {
    var b = 12;
    function B() {
        var c = 23;
        console.log('c is: '+c);
    }
    function C() {
        var d = 56;
        console.log('d is: '+d);
    }
    console.log('b is: ' + b);
    D(b);
    B();
    C();
}
A();
function D(n) {
    return n + a;
}

// Scoping Chaining

// A-a,b,B(),C(),D()
// B-a,b,c,C(),D()
// C-a,b,B(),d,D()
// D-a,A(),n
