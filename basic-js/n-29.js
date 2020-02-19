// let marks = [
//     ['ssc', 65, 67, 78],
//     ['hsc', 57, 61, 75],
//     ['admission', 13, 8, 15]
    
// ];
// for (let row = 0; row < marks.length; row++){
//     for (let col = 0; col < marks[row].length; col++){
//         console.log('PHY/CHE/BIO Numbers- ' + (row+1) + ' : ' + marks[row][col]);
//     }
// }

let arr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < (arr.length/2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}
console.log(arr);

//let mainArray = [11, 22, 33];
// let copyArray = mainArray;
// let copyArray = Array.from(mainArray);
// copyArray[3] = 44;
// console.log('Main Arr: ' + mainArray + ' Copied Arr: ' + copyArray);