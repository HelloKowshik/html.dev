let arr = [1, 2, 3, 4];
let sqrArr = arr.map(d => d * d);
console.log(sqrArr);

function asyncMap(arr, cb) {
    return arr.map(e => {
        // setTimeout(cb.bind(null, e), 0);
        setTimeout(() => cb(e), 0);
    });
}

let qbArr = asyncMap(arr, x => {
    console.log(x);
});
console.log(qbArr);