
// function functionName() {
//     return 'Hello From Function!';
// };

// for (let i = 1; i <= 10; i++){
//     console.log(i+' . '+functionName());
// }

// function add(a, b) {
//     let sum = a + b;
//     console.log(sum);
// }

//add(3, 4);

// let arr1 = [-30, -30, 40];
// function arraySum(e) {
//     let sum = 0;
//     for (let i = 0; i < e.length; i++){
//         sum += e[i];
//     }
//     console.log(sum);
// }
// arraySum(arr1);

function testFunc() {
    let sum = 0;
    let i;
    for ( i= 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log('Total Data: ' + i + ' Sum: ' + sum);
}
//testFunc(2, 3, 5, 10);
function Person(name, mail) {
    return {
        name: name,
        mail: mail
    }
}

let p1 = Person('test', 'test@io.com');
//console.log(p1);

setTimeout(function () { 
    console.log("Incomming Missiles!!!");
}, 5000);

let func = function (a, b) {
    return a + b;
};
let f1 = func;
console.log(f1(2,3));