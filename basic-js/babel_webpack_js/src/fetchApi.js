// Fetch API

let BASE_URL = 'https://jsonplaceholder.typicode.com';

// fetch(`${BASE_URL}/users/1`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         return Promise.resolve('New Promise-1');
//     })
//     .then(res => {
//         console.log(res);
//         return Promise.resolve('New Promise-2');
//     })
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => console.log(e));

function getRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('get', url);
        xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                resolve(response)
            } else {
                reject(new Error('Error Occured!'));
            }
        }
     }
     xhr.send();
    })
}
getRequest(`${BASE_URL}/posts/1`)
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e.message);
    })