// Implementation of forEach function

var arr = [1, 2, 3, 4, 5];
var sum = 0;
// arr.forEach(function (value,index,arr) { 
//     //console.log(value, index, arr);
//     sum += value;
// });
// console.log(sum);

function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++){
        //console.log(arr[i]);
        callback(arr[i],i,arr);
    }
}

myForEach(arr, function (value, index, arr) {
    console.log(value, index, arr);
    sum += value;
});

console.log(sum);

myForEach(arr, function (value, index, arr) {
    arr[index] = value * value;
})
console.log(arr);