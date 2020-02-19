// Higher Order Function

function add(a, b) {
    return a + b;
}

function calculate(a, b, func) {
    var c = a + b;
    var d = a - b;

    // function multiply() {
    //     var m = func(a, b);
    //     return c * d * m;
    // }
    // return multiply;

    return function () {
        var m = func(a, b);
        return c * d * m;
    }
}

var m = calculate(5, 4, add);
//console.log(m());

// Closure

var f = 10;

function test() {
    var x = 15;
    return function () {
        console.log(x);
    }
}

var fu = test();
//console.dir(fu);
//console.log(fu());
//fu();

// Call Back Function

function sample(a, b, callback) {
    var c = a + b;
    var d = a - b;
    var result = callback(c, d);
    return result;
}

function add(a, b) {
    return a + b;
}

var r1 = sample(5, 4, add);
console.log('SUM: ' + r1);
var r2 = sample(6, 4, function (c, d) { 
    return c - d;
});
console.log('SUB: ' + r2);
var r3 = sample(8, 5, function (c, d) { 
    return c * d;
});
console.log('MUL: ' + r3);