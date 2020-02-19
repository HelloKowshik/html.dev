let list = document.getElementById('list');
let li = createElement('li', 'Five', 'list-group-item');
// li.setAttribute('title', 'List item-5');
list.appendChild(li);

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

let firstChild = list.firstElementChild;
//console.log(firstChild);
setTimeout(() => { 
    firstChild.innerHTML += ' (Modified)';
    firstChild.classList.add('text-primary');
    firstChild.style.background = 'orange';
}, 3000);

// setTimeout(() => {
//     list.lastChild.remove();
//  }, 2000);

let items = list.lastElementChild.cloneNode(true);
items.innerHTML = 'Six';
list.appendChild(items);
// console.log(list.getAttributeNames());
// console.log(list.attributes)
// console.log(list.classList);
// console.log(list.className)
// console.log(list.getAttribute('id'));
// console.log(list.getAttribute('class'));
// console.log(list.getAttributeNode('id'));
// console.log(list.getAttributeNode('class'));

// items.id = 'last-item';
// items.setAttribute('id', 'last-item');
let attr = document.createAttribute('title');
attr.value = 'I am title';
items.setAttributeNode(attr);
