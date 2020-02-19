let postForm = document.getElementById('post-form');
let ul = document.getElementById('posts');
const URL = 'https://jsonplaceholder.typicode.com/posts';
postForm.addEventListener('submit', function (e) { 
    e.preventDefault();
    let title = this.title.value || 'post-title';
    let body = this.body.value || 'message';
    if (title && body) {
        let postObj = {
            userId: 1001,
            title,
            body
        };
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(posts => {
                let item = itemList(posts);
                ul.appendChild(item);
                this.reset();
            })
            .catch(e => console.log(e.message));
    } else {
        alert('Fill All the boxes!');
    }
});

function itemList(item) {
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${item.id}. ${item.title} By User ${item.userId}`;
    return li;
}