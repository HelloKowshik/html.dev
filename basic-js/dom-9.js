// let root = document.querySelector('#root');
// let jmbDiv = document.createElement('div');
// jmbDiv.className = 'jumbotron text-center';
// jmbDiv.setAttribute('id','my-jmb');
// root.appendChild(jmbDiv);
// let h1 = document.createElement('h1');
// h1.className = 'display-2 py-2';
// h1.innerHTML = '<strong>Hello World</strong>';
// jmbDiv.appendChild(h1);


let nameInput = document.querySelector('#nameInput');
let ul = document.querySelector('#nameList');
nameInput.addEventListener('keypress',e=>{
    if(e.keyCode === 13){
        let name = e.target.value;
        //ul.appendChild(createList(name));
        createList(ul,name);
        e.target.value = '';
    }
});

function createList(e,x){
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex';
    li.innerHTML = x;
    let span = document.createElement('span');
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.innerHTML = 'X';
    li.appendChild(span);
    span.style.cursor = 'pointer';
    span.addEventListener('click',()=>{
        e.removeChild(li);
    });
    //return li;
    e.appendChild(li);
}