// Modern Js- try catch

var obj = {
    name : 'Warner',
    team : 'Australia',
    role : 'Openar',
    style : 'Left-Hand Batsman'
  }
  
  for(let i in obj){
    console.log(`${i} : ${obj[i]}`);
  }
  
  var arr = ['Smith','Aus','MO','RHB'];
  try{
    throw new Error('Invalid Data');
  for(let i in arr){
    console.log(arr[a]);
  }
  }catch(e){
    console.log(e.message);
  }
  try{
    cosole.log('Error');
  }catch(e){
    console.log(e.message);
  }