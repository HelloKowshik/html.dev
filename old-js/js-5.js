let x = 10;
if(x>0 && x%2==0){
    console.log('Correct!');
}else{
    console.log('Incorrect!');
}
let y = 10;
let res = (x>0 && x%2==0) ? 'All is well.':'Nothing is Ok.';
console.log(res);

let mark = 41 ;
if(mark>=0 && mark<33){
    console.log('F');
}else if(mark>=33 && mark<=39){
    console.log('D');
}else if(mark>39 && mark<=49){
    console.log('C');
}else if(mark>49 && mark<=59){
    console.log('B');
}else if(mark>59 && mark<=69){
    console.log('A-');
}else if(mark>69 && mark<=79){
    console.log('A');
}else if(mark>79 && mark<=100){
    console.log('A+');
}else{
    console.log('Invalid');
}
