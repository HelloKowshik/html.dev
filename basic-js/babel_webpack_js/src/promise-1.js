// const delay = s => new Promise(resolve => { setTimeout(resolve, s * 1000) });
// delay(2).then(e => console.log('2 Seconds'));
// delay(1).then(e => console.log('1 Seconds'));
// delay(3).then(e => console.log('3 Seconds'));
// delay(5).then(e => console.log('5 Seconds'));
// delay(4).then(e => console.log('4 Seconds'));

// let p1 = Promise.resolve('One');
// p1.then(e => {
//     console.log(e); 
// });
// let p2 = Promise.reject('REJECT');
// p2.catch(e => {
//     console.log(e);
// })

// let p3 = Promise.resolve('Two');
// let p4 = Promise.resolve('Three');
// let p5 = [p1, p3, p4];
// Promise.all(p5)
//     .then(e => {
//         console.log(e);
// })

let a1 = new Promise(resolve => { setTimeout(resolve, 5000, 'One') });
let a2 = new Promise(resolve => { setTimeout(resolve, 2000, 'Two') });
let a3 = new Promise(resolve => { setTimeout(resolve, 1000, 'Three') });
let a4 = [a1, a2, a3];
Promise.all(a4)
    .then(arr => {
        console.log(arr);
    })
Promise.race(a4)
    .then(e => {
        console.log(e)
    });