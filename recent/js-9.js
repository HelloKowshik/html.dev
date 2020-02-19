// Closure Bug
 
function makeFunctionArray(){
    const arr = [];
    for(var i = 0; i<5; i++){
        arr.push(function(){console.log(i)});
    }
    return arr;
}
const func = makeFunctionArray();
func[0]();


// IIFE closure


function makeFunctionWithArray(){
    const arr = [];
    for(var i = 0; i<5; i++){
        arr.push((function(x){
            return function(){console.log(x)}
        })(i))
    }
    return arr;
}
const Func = makeFunctionWithArray();
Func[0]();