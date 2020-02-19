// Recursive function

function sayHi(n) {
    if (n === 0){
        return;
    }
    console.log(n + ' :I am calling');
    return sayHi(n - 1);
}

//sayHi(5);

function sum(n) {
    if (n === 1) {
        return 1;
    }
    console.log(n);
    return n + sum(n - 1);
}
//console.log(sum(5));

var arr = [1, 2, 3, 4, 5, 6];
function sumOfArray(array, lastIndex) {
    if (lastIndex < 0) {
        return 0;
    }
    return arr[lastIndex] + sumOfArray(arr, lastIndex - 1);
}
console.log(sumOfArray(arr, arr.length - 1));