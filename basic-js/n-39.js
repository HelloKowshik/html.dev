// find() AND findIndex() function Implementation

var arr = [7, 4, 8, 6, 9, 2, 1, 70, 3, 33, 22];

// var f1 = arr.find(function (value) {
//     return value === 8;
// });
// console.log(f1);

// var f2 = arr.findIndex(function (value) {
//     return value === 8;
// });
// console.log(f2);

function myFind(arr, callback) {
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return arr[i];
        }
    }
}

function myFindIndex(arr, callback) {
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])) {
            return i;
        }
    }
}

var f3 = myFind(arr, function (value) {
    return value === 8;
});
console.log(f3);

var f4 = myFindIndex(arr, function (value) { 
    return value === 8;
});
console.log(f4);