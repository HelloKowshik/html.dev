// let list = document.getElementById('list');
// let li = document.createElement('li');
// li.className = 'list-group-item';
// li.setAttribute('title', 'list item');
// li.innerHTML = 'Five';
// list.appendChild(li);

let list = document.getElementById('list');
let li = createElement('li', 'Five', 'list-group-item');
li.setAttribute('title', 'List item-5');
list.appendChild(li);
let p1 = createElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deleniti?', 'lead');
let p2 = createElement('p', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, deleniti?', 'lead');
let div = createElement('div');
append(div, [p1, p2]);
// console.log(div);
// let container = document.getElementById('cont');
// container.appendChild(div);
// list.insertAdjacentElement('beforebegin', div);
// list.insertAdjacentElement('afterbegin', div);
// list.insertAdjacentElement('beforeend', div);
list.insertAdjacentElement('afterend', div);
function createElement(tagName, innerHTML, className) {
    let tag = document.createElement(tagName);
    tag.innerHTML = innerHTML || '';
    tag.className = className || '';
    return tag;
}

function append(parent, childreen) {
    childreen.forEach(child => {
        parent.appendChild(child);
    });
}