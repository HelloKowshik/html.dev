// Webdeveloper Bd- jsonplaceholder practice

// async function showUser() {
//     await fetch('https://jsonplaceholder.typicode.com/comments')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// showUser();
let postData = {
    name: 'John Doe',
    email: 'john@doe.com',
    body: 'Fake Data Posting By John Doe'
}
// async function postUser() {
//     await fetch('https://jsonplaceholder.typicode.com/comments', {
//         method: 'POST',
//         body: JSON.stringify(postData),
//         headers: {
//             "Content-type": "application/json; charset=UTF-8"
//           }
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//     })
        
// }

// postUser();

let http = new HTTP();
// http.get('https://jsonplaceholder.typicode.com/comments')
//     .then(data => {
//         console.log(data);
//     })
http.post('https://jsonplaceholder.typicode.com/comments', postData)
    .then(check => console.log(check));