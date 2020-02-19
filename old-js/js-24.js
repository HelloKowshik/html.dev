// DOM
// element selection

let val;
val = document.querySelector('.product-collection-item');
//val = document.querySelector("a");

// Manipulation

// val.style.color = 'red';
// val.style.listStyle = 'none';
// val.textContent = 'Apex Shoes';
// val.innerText = 'Bata Shoes';
// val.innerHTML = "<a href ='http://www.bata-bd.com'>Bata-Ctg</a>";
// val.setAttribute('href',"http://www.bata-bd.com");
// console.log(val.getAttribute('href'));
//console.log(val.className);
//val = val.classList;
 val.classList.add('custom-class');
console.log(val);