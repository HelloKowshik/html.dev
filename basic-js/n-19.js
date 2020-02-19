// Event Propagation,Bubbling

let divs = document.querySelectorAll('div');
function logText(e){
    console.log(this.classList.value);
   // e.stopPropagation();  //To Stop Bubbling
}
divs.forEach(div=>div.addEventListener('click',logText,{capture : false,once:true}));
// document.body.addEventListener('click',logText);



// HTML Code

// body class="bod"
// <div class="one">
// <div class="two">
//   <div class="three">
//   </div>
// </div>
// </div>
// </body>