// Currying

function currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

var cur = currying(15)(20)(15);
//console.log(cur);

// Function Composition

function printResult(input) {
    console.log('Result is: '+input);
}
function multiplyByFive(n) {
    return n * 5;
}
function addTwoNum(a, b) {
    return a + b;
}
printResult(multiplyByFive(addTwoNum(6, 9)));