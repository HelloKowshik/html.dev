// Modern Js-dom

/*
// HTML Code for this dom
<div>
    <p id = 'p1'>Hello <b>World</b></p>
    <span>Some Other Text!</span>
</div>
<div class="d2">
    Another Div
    <input type="text" class="txt"/>
</div>

*/
var myP = document.querySelector('#p1');
myP.style.backgroundColor = '#F00';
myP.style.fontSize = '25px';
myP.style.borderRadius = '5px 5px';
var boldPart = document.querySelector('p>b');
boldPart.addEventListener('click',e=>{
    boldPart.innerHTML = 'I am Clicked';
});
var txt = document.querySelector('.txt');
// txt.addEventListener('keyup',e=>{
//     var x = e.target.value;
//     console.log(x);
// });

var d2 = document.querySelector('.d2');
d2.innerHTML = d2.innerHTML+"<br/><i>I am italic</i>";
var newEl = document.createElement('div');