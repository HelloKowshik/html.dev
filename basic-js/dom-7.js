// Complete Js

// Event Bubbling + Event Deligation

let li = document.querySelector("li");
let ul = document.querySelector("ul");
let container = document.querySelector(".container");

function display(e){
    console.log(`You clicked ${e.target.classList}`)
};

//li.addEventListener("click",display);
//ul.addEventListener("click",display);
container.addEventListener("click",display);