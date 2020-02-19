// async function Book() {
//     return 'Book';
// }
// console.log(Book());
// Book()
//     .then(x => {
//         alert(x)
//     });

// let p1 = new Promise(resolve => {
//     setTimeout(resolve, 2000, 'Book-1');
// })
// async function myAsyncFunc() {
//     // p1.then(x => {
//     //     console.log(x);
//     // })
//     let x = await p1;
//     console.log(x);
// }
// myAsyncFunc();

// async function fetchData() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await res.json();
//         let names = data.map(e => console.log(e.name));
//         console.log(data);
//     }
//     catch(x){
//         console.log(e.message);
//     }
// }
// fetchData();

let promiseArr = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
async function getAll() {
    let a = await Promise.all(promiseArr);
    console.log(a);
}
getAll();