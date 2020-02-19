// Array Traversing

var d1 = ['sat','sun','mon'];
var d2 = ['tue','wed','thu','fri'];
var days = d1.concat(d2);
// for(var i = 0; i<days.length;i++){
//   console.log(i+' : '+days[i]);
// }

for(let i in days){
  console.log(i+' : '+days[i]);
}


// Delete empty elements from Array

var d = [
    'sat','',NaN,null,'sun','mon',undefined,'tue',
    'wed','thu',,'fri'
    ];
  console.log(d);
  var days = [];
  
  for(let i in d){
    if(d[i]){
      days.push(d[i]);
    }
  }
  //var days = d.filter(Boolean);
  console.log(days);