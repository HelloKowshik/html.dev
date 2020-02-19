var arr = [4, 8, 1, 9, 7, 6, 4, -4, -8, 0, -5, 3, 5, 6, 8, 2, 1, 7];
var person = [
    {
        name: 'A',
        age: 24 
    },
    {
        name: 'B',
        age: 19 
    },
    {
        name: 'C',
        age: 26 
    },
    {
        name: 'D',
        age: 21
    }
];

// arr.sort();
arr.sort(function (a, b) {
    if (a > b) {
        return -1;
    } else if (a < b) {
        return 1;
    } else {
        return 0;
    }
});
console.log(arr);

person.sort(function (a, b) { 
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
});
console.log(person);

var r1 = arr.every(function (value) { 
    return value % 2 === 0;
});

var r2 = arr.some(function (value) { 
    return value % 2 === 0;
});
console.log(r1);
console.log(r2);