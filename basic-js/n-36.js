// Implementation of Map Function

var arr = [1, 2, 3, 4, 5];

// var sqrArr = arr.map(function (value) {
//    // return Math.floor(Math.random() * 100);
//     return value * value;
// });
// console.log(arr);
// console.log(sqrArr);

function myMap(arr,callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        //var temp = arr[i] * arr[i];
        var temp = callback(arr[i], i, arr);
        newArr.push(temp);
    }
    return newArr;
}
//console.log(myMap(arr));
var r1 = myMap(arr, function (value) { 
    return value * value * value;
});

var r2 = myMap(arr, function (value) { 
    return value * 10;
});

console.log(arr);
console.log(r1);
console.log(r2);