// Array Sorting

var list = [
    1,11,2,3,17,34,18,23,45,41,9,82,8
    ];
  console.log('Before: '+list);
  var length = list.length-1;
  for(let i = 0; i<length ; i++){
    for(let j =0; j<length; j++){
      if(list[j] > list[j+1]){
        [list[j],list[j+1]] = [list[j+1],list[j]];
      }
    }
  }
  console.log('After: '+list);


//   String To Array

var str = 'Hello Hunny Bunny';
var ar = str.split(" ");
console.log(ar);
console.log(ar.join(" "));

// Reverse String

var name = 'Sumaiya Islam';
var rev = name.split("").reverse().join("");
console.log(rev);

