// Modern Js-Serialize Data in Browser

let obj ={
    name : 'anik',
    age  : 25,
    loc  : 'ctg',
    knows : 'js,php',
    setAll: function(){
        console.log('Hi');
    }    
}
let json = JSON.stringify(obj);
//console.log(json);
localStorage.setItem('dataName',json);
let v = JSON.parse(localStorage.getItem('dataName'));
console.log(v);