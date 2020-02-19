// Async Await

// let p1 = getUser(1);
// let p2 = getCourses(p1.name);
// let p3 = getPrice(p2[0]);
// async function getPromises() {
//     let x = await p1;
//     console.log(x);
//     let y = await p2;
//     console.log(y);
//     let z = await p3;
//     console.log(z);
// }
// getPromises();

async function showPromises() {
    let user = await getUser(1);
    console.log(user);
    let courses = await getCourses(user.name);
    console.log(courses);
    let price = await getPrice(courses[0]);
    console.log('Dive Into Node Js');
}

showPromises();

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
            // resolve('Dive into Node.JS');
            resolve();
         }, 2000); 
    });
}