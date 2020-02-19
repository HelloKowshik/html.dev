// Finding divisors of a given number

var n = 144;
var range = Math.ceil(Math.sqrt(n));
var divisors = '';
for(var i = 1;i<=range;i++){
  if(n%i==0){
    if(i==(n/i)){
      divisors+= i + ' ';  
    }else{
      divisors+= i+' '+(n/i) + ' '; 
    }
  }
}
console.log(divisors);