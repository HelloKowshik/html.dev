// Function-1

function product(){
    let value = '';
    for(let val of arguments){
        value +=val+' '; 
    }
    return value;
}
let a1 = product('simba','bollywood',2018,'Ranvir/Sara Ali Khan');
console.log(a1);

function students(id,...info){              //Rest Operator
    let i ='';
    for(let e of info){
        i+=e+' ';
    }return id+' '+i;
}
let std = students(112,'abid','class-10','science','Chittagong','01711 22 33 44');
console.log(std);

function forAll(a,b,c=10,d){            //default parameter
    return `Name: ${a} | age: ${b} | Bonus: ${c} | Area: ${d}`;
}
let c1 = forAll('Sumaiya',14,11,'Chawlkbazar');
console.log(c1);

// Arrow Function

let arrowFunc = (n1,n2)=>n1+n2;
let b = arrowFunc(20,33);
console.log(b);