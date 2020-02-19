let title = document.getElementById('title');
title.style.fontSize = '50px';
title.style.background = 'red';
title.style.color = "green";

let styleObj = {
    fontSize: '40px',
    background: 'yellow',
    color: 'green'
};

let list = document.getElementById('list');
[...list.children].forEach(li => { Object.assign(li.style, styleObj) });