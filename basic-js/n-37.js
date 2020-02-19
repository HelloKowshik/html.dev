// filer() method Implementation

var arr = [4, 8, 5, 6, 1, 3, 9, 10, 7];

// var filteredArr = arr.filter(function (value) { 
//     return value >= 5;
// });
// console.log(filteredArr);

function myFilter(arr,callback) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i],i,arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(myFilter(arr, function (value) {
    return value % 2 === 0;
}));

console.log(myFilter(arr, function (value) {
    return value >= 5;
}));
