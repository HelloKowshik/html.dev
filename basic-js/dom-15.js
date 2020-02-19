let btn = document.getElementById('btn');
let dlt = document.getElementById('dlt');
// let list = document.getElementById('list');
let box = document.getElementById('box');

btn.addEventListener('click', function (e) { 
    let li = list.lastElementChild.cloneNode(true);
    li.innerHTML = 'I have created by Click!';
    list.appendChild(li);
});
// dlt.addEventListener('click', function (e) {
//     list.lastChild.remove();
//  });

box.addEventListener('mousemove', function (e) { 
    document.getElementById('x-value').innerHTML = e.clientX;
    document.getElementById('y-value').innerHTML = e.clientY;
});

// [...list.children].forEach(li => { 
//     li.addEventListener('click', function (e) { 
//         e.target.remove();
//     });
// });

list.addEventListener('click', function (e) { 
    if (this.contains(e.target)) {
        e.target.remove();
    }
});