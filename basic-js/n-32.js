
function greeting(greet, name) {
    function getName() {
        if (name) {
            return name.split(' ')[0];
        } else {
            return '';
        }
    }
    let answer = greet + ' ' + getName();
    console.log(answer);
}
//greeting('Good Night', 'an ik');

let globalVar = 'Global';
function outer() {
  //  var globalVar = 'Inside';
    function inner() {
       // let globalVar = 'Inside Inside';
        console.log(globalVar);
    }
    inner();
}
//outer();

function test(n) {
    function a() {
        return n % 3 === 0;
    }
    function b() {
        return n % 5 === 0;
    }
    if (a() && b()) {
        console.log(n + ' is divisible by 3 AND 5');
    } else {
        console.log(n + ' is not divisible by 3 AND 5');
    }
}
test(16);