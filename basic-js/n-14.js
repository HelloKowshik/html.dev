var num1 = [2,4,6];
var num2 = [8,10,12];
var num3 = [1,2,3,4,5];
var num = num1.concat(num2);
console.log(num);
//  var sliced = num.slice(1,4);
//  console.log(sliced);
function checkEven(n){
  if(0 === n%2){
    return true;
  }return false;
}
function checkOdd(x){
  if(x%2 !=0){
    return true;
  }return false;
}
var result1 = num.every(checkEven);
console.log(result1);
var result2 = num3.some(checkOdd);
console.log(result2);
var result3 = num3.filter(checkEven);
var result4 = num3.filter(checkOdd);
console.log(result3,result4);

// SPlice

var numb = [1,3,4,5,6,8];
var result = numb.splice(1,2,'aus','pak');
console.log(result,numb);

// Array Reduce

var n1 = [1,3,5];
var r1 = n1.reduce(
    (a1,b1)=>{
        console.log(a1,b1);
        return a1+b1;
    },0
);
console.log(r1);