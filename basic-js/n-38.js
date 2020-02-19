// reduce() function Implementation

var arr = [24, -5, 1, 22, 12, 5, 55, 6, 2, 23];

// var sum = arr.reduce(function (prev, curr) {
//     return prev + curr;
// }, 100);
// var max = arr.reduce(function (prev, curr) { 
//     return Math.max(prev, curr);
// });
// console.log(sum);
// console.log(max);

function myReduce(arr, callback, acc) {
    for (var i = 0; i < arr.length; i++){
        acc = callback(acc, arr[i]);
    }
    return acc;
};

var sum1 = myReduce(arr, function (prev, curr) {
    return prev + curr;
},0);
console.log(sum1);

var max1 = myReduce(arr, function (prev, curr) { 
    return Math.max(prev, curr);
}, 0);
console.log(max1);

var min1 = myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr);
}, arr[0]);
console.log(min1);