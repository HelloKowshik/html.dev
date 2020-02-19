// Modern Js-Array Function-1

var arr = ['Smith','Aus','MO','RHB'];

//arr.forEach(data=>console.log(data));

var newArr = [];
arr.forEach(data=>
  newArr.push(data+' done')
);
console.log(newArr);

var newArr = arr.map(data=>{
  return data+' done';
});
console.log(newArr);

var reversed = arr.reverse();
console.log(reversed);

var str = 'The Quick Brown Fox';
var splitStr = str.split("").reverse();
console.log(splitStr.join(""))

var num = [10,1,22,210,101,30];
var result = num.sort(
    (a,b)=>{
      //console.log(`A:${a} B:${b}`);
      //console.log(`${a-b}`);
      //return a-b;
      return b-a;
    }
  );
console.log(result);