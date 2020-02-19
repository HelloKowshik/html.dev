let obj = {
    x: 23,
    y: 34
};

function test(e) {
    e.x = 32;
    e.y = 43;
    //console.log(e);
}
//test(obj);
//console.log(obj);

// First Class Function

function add(x, y) {
    return x + y;
}

var sum = add;
console.log(sum(5, 5));

var arr = [];
arr.push(sum);
console.log(arr[0](3, 2));

var obj1 = {
    sum : add
}
console.log(obj1.sum(10, 10));

setTimeout(function () { 
    console.log('Timer Out!');
}, 100);