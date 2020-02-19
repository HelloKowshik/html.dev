// Asynchronous JS

// console.log(1);
// getNumber(2, (e) => console.log(e));
// console.log(3);
// function getNumber(num,callback) {
//     setTimeout(() => {
//         console.log('Set Time Out');
//         callback(num);
//     }, 2000);
// }

getUser(101, (x) => {
    console.log(x);
    getCourses(x.name, e => {
        console.log(e);
        getPrice(x[0], () => {
            console.log('JS Price is: 4233 Taka');
         });
     });
});
function getUser(id, callback) {
    setTimeout(()=> {
        callback({
            id: 101,
            name: 'john',
            profession: 'designer'
        });
     }, 2000);
}

function getCourses(name, callback) {
    setTimeout(() => { 
        callback(['js', 'react', 'node']);
    }, 2000);
}

function getPrice(courseName, callback) {
    setTimeout(() => {
        callback();
     }, 2000);
}