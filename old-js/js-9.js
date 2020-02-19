// Object-3

function sayHi(name,greet){                                   //function defination
    return `${this} : ${greet} to Mr/Mrs ${name}`;
}
console.log(sayHi.call('Operator','Samim','Good Evening'));
console.log(sayHi.apply('Operator',['Hasin Hayder','Good Morning']));
let binding = sayHi.bind('Manager');
console.log(binding.apply(undefined,['Samrat','So,Cool']));
console.log(binding.call(undefined,'Samrat','So,Cool'));

let toDo = function(task,time){                                 //function expression
    return `${task} at ${time} completed by ${this} `;
}.bind('BY PUC APP');

console.log(toDo.call(undefined,'exam','morning'));
console.log(toDo.apply(undefined,['exam','morning']));