// getUser(1)
//     .then(user => {
//         console.log(user);
//         return getCourses(user.name)
//     })
//     .then(courses => {
//         console.log(courses);
//         return getPrice(courses[0]);
//     })
//     .then(() => {
//         console.log('Annonymus Data');
//     })
//     .catch(err => {
//         console.log(err.message);
// })
function getUser(id) {
    return new Promise((resolve, reject) => { 
        setTimeout(()=> {
            resolve({
                id: 101,
                name: 'john',
                profession: 'designer'
            });
        }, 2000);
    });
}

function getCourses(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            resolve(['js', 'react', 'node']);
        }, 2000);
     });
}

function getPrice(courseName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
         }, 2000); 
    });
}


let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.reject(new Error('Error Occured!'));
let p4 = Promise.resolve(3);
let promises = [p2, p3, p4, p1];
// let promises = [p2, p4, p1];
// Promise.all(promises)
//     .then(e => {
//         console.log(e);
//     })
//     .catch(err => {
//         console.log(err.message);
// })
Promise.race(promises)
    .then(e => {
        console.log(e);
    })
    .catch(err => {
        console.log(err.message);
})