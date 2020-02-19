let list = document.getElementsByTagName('li');
//console.log(list);
// let lists = Array.from(list);
// let lists = Array.prototype.slice.apply(list);
let lists = [...list];
lists.forEach((e,index) => {
    let text = e.innerHTML;
    e.innerHTML = `{${index + 1}} ${text}`;
})