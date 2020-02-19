const URL = 'https://jsonplaceholder.typicode.com/posts';
let btn = document.getElementById('load');
let ul = document.getElementById('post');
// btn.addEventListener('click', function () { 
//     fetch(URL)
//         .then(response => {return response.json() })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(e => {
//             console.log(e => e.message);
//     })
// });
btn.addEventListener('click', function () { 
let xhr = new XMLHttpRequest();
xhr.open('get', 'https://jsonplaceholder.typicode.com/posts');
xhr.onreadystatechange = function (e) { 
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let posts = JSON.parse(xhr.response);
            // console.log(posts);
            posts.forEach((post,index) => {
                let listData = itemList(post, index + 1);
                // console.log(listData);
                ul.appendChild(listData);
            })
        } else {
            console.log(xhr.status);
        }
    }
};
xhr.send();
});

function itemList(item,index) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${index}. ${item.title}`;
    return li;
}