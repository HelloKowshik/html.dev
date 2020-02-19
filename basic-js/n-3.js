// Print Calender of a month

var month = 'November,2019';
var days = 30;
var startingDay = 5;
console.log('Calender Of '+month);
console.log('Sun  Mon  Tue  Wed  Thu  Fri  Sat');
for(var i = 0 ; i<5 ; i++){
  var dayRow = '';
  for(var j =1; j<=7;j++){
    var curentDay = (7*i) + j-startingDay;
    if(curentDay > days){
      break;
    }else if(curentDay<1){
        curentDay = ' ';
    }
    if(curentDay>9){
      dayRow+= curentDay+'   ';
    }else{
      dayRow+= curentDay+'    ';
    }
    
  } 
  console.log(dayRow);
}
