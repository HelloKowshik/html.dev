// Modern Js-Dom

document.body.innerHTML = "";
 for(let i = 1 ;i<=10; i++){
  let newEl = document.createElement("div");
  newEl.innerHTML = `this is div-${i}`;
  document.body.appendChild(newEl);
}

let divCol = document.querySelectorAll('div');
divCol.forEach(e=>e.style.color='red');
let ArrayCollect = Array.prototype.slice.call(divCol);
//[].map.call(divCol,x=>console.log(x));
//Array.prototype.map.call(divCol,e=>e.style.color="green")