// Promise

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(resolve, 3000, 'One');
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Two');
// });

// console.log(p1);
// p1.then((e) => {
//     console.log(e);
// }).catch((e) => { 
//     console.log(e);
// });

// p1.then((e) => {
//     console.log(e);
// });
 
// p2.then((e) => {
//     console.log(e);
// })


function getPhone(check) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (check) {
                resolve('I jave got a new Phone!');
            } else {
                // reject('No new Phone');
                reject(new Error('No new Phone'))
            }
        }, 2000);
    });
    return promise;
}

// console.log(getPhone(false));

getPhone(false).then((e) => {
    console.log(e);
}).catch((e) => {
    console.log(e.message);
 });