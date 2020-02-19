// let sum = 0;
// for (let i = 1; i <= 100; i++){
//     if (i % 2 == 0) {
//         console.log(`${i} : ${sum}`);
//         sum = sum + i;
//     }
// }
// console.log(sum);

// let bool = true;
// while (bool) {
//     let lottary = Math.floor(Math.random() * 10 + 1);
//     if (9 === lottary) {
//         console.log('Winner Winner Chicken Dinner!');
//         bool = false;
//     } else {
//         console.log('Your Lottary Number is: ' + lottary);
//     }
// }

// let n = 5;

// for (let i = 1; i <= n; i++){
//     let result = '';
//     for (let j = 1; j <= i; j++){
//         result += j + ' ';
//     }
//     console.log(result);
// }

let sqr = 5;
for (let i = 1; i <= sqr; i++){
    let res = '';
    for (let j = 1; j <= sqr; j++){
       // res += '* ';
        res += j+' ';
    }
    console.log(res);
}