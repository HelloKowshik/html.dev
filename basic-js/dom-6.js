// Complete Js
// Event Register
// let h1 = document.querySelector(".hi");
// h1.addEventListener('click',function(e){
//     //console.log(e);
//     console.log(`TYPE : ${e.type}`);
//     console.log(`Target : ${e.target}`);
//     console.log(`X : ${e.offsetX}`);
//     console.log(`Y : ${e.offsetY}`);
//     console.log(`Client-X : ${e.clientX}`);
//     console.log(`Client-Y : ${e.clientY}`);
// })

//let list = document.querySelectorAll(".product-collection-item");
let forms = document.forms[0];
function doSome(e){
    console.log(e);
    e.preventDefault();
    console.log(`TYPE : ${e.type}`);
    console.log(`Target : ${e.target}`);
    console.log(`X : ${e.offsetX}`);
    console.log(`Y : ${e.offsetY}`);
    console.log(`Client-X : ${e.clientX}`);
    console.log(`Client-Y : ${e.clientY}`);
    console.log(`Value : ${e.target.innerText}`);
};
// list.forEach(element => {
//     addEventListener('click',doSome);
// });
forms.addEventListener('click',doSome);