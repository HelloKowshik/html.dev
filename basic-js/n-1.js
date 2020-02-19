// largest number with sequence

var a = 103,b = 104,c = 102;
if(a > b && a > c){
  if(b>c){
    console.log('a>b>c',a,b,c);  
  }else if(b ==c ){
    console.log('a>b=c',a,c,b);
  }else{
    console.log('a>c>b',a,c,b);
  }
}else if(b > a && b > c){
  if(a>c){
    console.log('b>a>c',b,a,c);
  }else if(a == c){
    console.log('b>a=c',b,a,c);
  }else{
    console.log('b>c>a',b,c,a);
  }
}else if(a == b){
  if(a > c){
    console.log('a=b>c',b,a,c);
  }else if(a == c){
    console.log('c=a=b',c,a,b);
  }else{
    console.log('c>a=b',c,a,b);
  }
}else if(b == c){
  if(a > b){
    console.log('a>b=c',a,b,c);
  }else if(a == b){
    console.log('a=b=c',a,b,c);
  }else{
    console.log('b=c>a',b,c,a);
  }
}