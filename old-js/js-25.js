// DOM
// Traversing DOM

 let val;
 val = document.querySelector('.product-collection');
 console.log(val);
 //val = val.childNodes;
// val = val.children;
// val = val.children.length;
//  val = val.children[1].nextElementSibling;
val = val.children[1].nextElementSibling.parentElement;
 console.log(val);