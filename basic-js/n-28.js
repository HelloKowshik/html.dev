// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0, sum1 = 0;
// console.log(arr);
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     } else if (arr[i] % 2 !== 0) {
//         sum1 += arr[i];
//     }
// }
// console.log(`EVEN SUM: ${sum} ODD SUM: ${sum1}`);
// arr.push('last');
// arr.unshift('first');
// arr.pop();
// arr.shift();
// arr.splice(2, 0, 22, 33, 44);
// arr.splice(2, 3);
// console.log(arr);

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0, isFound = false, check = 22;
for (let i = 0; i < arr.length; i++){
    count++;
    if (arr[i] === check) {
        console.log('Data Found at ' + i);
        isFound = true;
        break;
    }
}
console.log('COUNT: ' + count);
if (!isFound) {
    console.log('Data Not Found!');
}