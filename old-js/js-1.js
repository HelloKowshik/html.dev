var main = document.querySelector("#main");
var msg = document.querySelector("#msg");
var txt = document.querySelector("#txt");
msg.addEventListener("keypress",function(){
    var box = main.value.indexOf(msg.value);
    if(box ===-1){
        txt.innerHTML = `The Search Text ${msg.value} was not found!`;
    }else{
        txt.innerHTML = `The Search Text ${msg.value} was found at ${box}`;
    }
});