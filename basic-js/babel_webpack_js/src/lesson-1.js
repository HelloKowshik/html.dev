// Lesson-1 (Asynchronus JS)

// console.log('I am line One');
// setTimeout(() => {
//     console.log('I am line Two');
// }, 1000);
// setTimeout(() => {
//     console.log('I am line Three')
// }, 500);

// console.log('I am line Four');

// setTimeout(() => { 
//     console.log('I am line Five');
// }, 0);
// console.log('I am line Six');

function sayName(name) {
    setTimeout(() => {
        console.log('Asynchronous JS');
        console.log(name);
    }, 2000);
};
sayName('Anik');