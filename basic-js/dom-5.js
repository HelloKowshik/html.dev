// Complete JS-dom

let ul = document.querySelector('.product-collection');
//let li = document.createElement("li");
let li = document.createElement("a");
li.setAttribute('href','#');
li.className = "product-collection-item";
//ul.appendChild(li);
ul.prepend(li);
li.appendChild(document.createTextNode("Smartphones"));
console.log(ul);
const oldData = document.querySelector(".hi");
const container = document.querySelector(".container");
const newData = document.createElement("h1");
newData.appendChild(document.createTextNode("Updated List"));
//container.replaceChild(newData,oldData);
oldData.replaceWith(newData);
//ul.lastElementChild.remove();
let list = document.querySelector('ul.product-collection');
list.removeChild(list.lastElementChild);