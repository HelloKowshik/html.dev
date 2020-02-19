// Hoisting

var a = 100;
//newPrint(a);
print(10);
var newPrint = print;
newPrint(45);
function print(a) {
    console.log(a);
}
print(a);

// Creational Phase
// 1. a = undefined
// 2. newPrint = undefined
// 3. print = ref

// Executional Phase
// 1. a = 100
// 2.newPrint = ref