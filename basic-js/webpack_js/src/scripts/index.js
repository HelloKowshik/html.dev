import '../styles/index.scss'

// var name = 'kowshikur rahman';
// var age = 2;
// console.log(`My name is ${name}, I'm ${age} years old.I am ${age < 18 ? 'not ' : ''}adult`);
// console.log(name.padStart(21, '*'));
// console.log(name.padEnd(21, '*'));
// console.log('anik-'.repeat(5));

// let add = (a, b) => a + b;
// console.log(add(10, 20));
// let sqr = e => e * e;
// console.log(sqr(5));

// let obj = {
//     name: 'kr anik',
//     print: function () {
//         //let self = this;
//         setTimeout(function () {
//            // console.log(`Name: ${self.name}`)
//             console.log(this.name);
//         }.bind(this), 1000);
//     }
// };
// obj.print();

// let obj2 = {
//     n: 'kowshik',
//     print: function () {
//         setTimeout(() => { console.log(this.n); }, 1000);
//     }
// }
// obj2.print();

// Default Parameter

// function testMe(n='User', m='greet') {
//     console.log(`${n} ,${m}!`);
// }
// testMe(undefined,'Good Morning');

// Iterable Object

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function () {
//         let currentValue = this.start;
//         const self = this;
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value: currentValue > self.end ? 'undefined' : currentValue++
//                 }
//             }
//         }
//     }
// }

// for (let e of obj) {
//     console.log(e);
// }

// let iterate = obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// Rest And Spread Operator

// function sum(...rest) {
//     return rest.reduce((a, b) =>  a + b );
// }
// console.log(sum(1, 2, 3, 4, 5));
//let arr = [1, 2, 3, 45, 56];
//console.log(...arr);
// let obj1 = {
//     a: 12,
//     b: 23,
//     c: 45
// }

// let obj2 = {
//     ...obj1
// }
// console.log(obj2);

// Enhance Object

// let a = 12, b = 15;
// let obj3 = {
//     a, b,
//     print() {
//         console.log(this);
//     }
// };
// obj3.print();

// Destructure

// let person = {
//     name: 'anik',
//     email: 'hellokowshik@gmail.com',
//     info: {
//         city: 'Chittagong',
//         country: 'Bangladesh'
//     }
// }
// console.log(person);
// let { name, email, info, info: { city, country } } = person;
// console.log(name, email, city, country);

// Array to Object

// let obj4 = {
//     a: 15,
//     b: 25
// }
// console.log(Object.entries(obj4));
// let arr1 = [
//     ['a',15],['b',25]
// ];
// console.log(Object.fromEntries(arr1));

// Symbols

