// Ajax-webdeveloper Bd

let btn = document.querySelector('button');
let data = document.querySelector('.data');
btn.addEventListener('click', showData);
function showData() {
    let xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.open('GET', './sample.json');
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
            if (xhr.readyState === 4) {
                //let jsonData = JSON.parse(xhr.response)
                data.textContent = xhr.response;
            }
        }
    }
    xhr.send();
}