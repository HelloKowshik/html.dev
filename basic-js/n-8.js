// IIFE

// (function (){
//     var x = 'IIFE';
//     console.log(x);
// })();
// console.log(x);

(function(a,b){
    var x = a+b;
    console.log(x);
})(2,3);

// Impure Function
function imf(a,b){
    let f = d+e; 
    e = 7;
    return f;
  }
  
  let d = 5;
  let e = 6;
  console.log(imf(d,e));
  console.log(d,e);

//   Pure Function

function pf(a,b){
    return a+b;
  }
  let a = 5;
  let b = 6;
  console.log(pf(a,b));
  console.log(a,b);

//   Closure

function bd(){
    var bn = 'Bangla';
      function lan(){
        console.log(bn);  
      }
      return lan;
  }
  
  var x = bd();
  x();