// const num = 5;
// console.log(num+1);
// import { add } from './add';
// import name from './multiply';
// console.log(name);
// console.log(add(2, 3));

const URL = 'https://jsonplaceholder.typicode.com/posts';
let btn = document.getElementById('load');
let ul = document.getElementById('post');
btn.addEventListener('click', function () { 
    fetch(URL)
        .then(response => {return response.json() })
        .then(data => {
            console.log(data);
        })
        .catch(e => {
            console.log(e => e.message);
    })
});