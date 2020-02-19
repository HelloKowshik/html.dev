// 'use strict';
// Iterator Basic With ES-5
const arr = [1, 2, 3];
const str = 'hello';
// function createIterator(collection) {
//     let i = 0;
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }
// let i1 = createIterator(str);
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());
// console.log(i1.next());

//Iterator With Symbol
// console.log(arr[Symbol.iterator]);
// let iterate = arr[Symbol.iterator]();
// let iterate = str[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// forOf Loop

// for (let v of arr) {
//     console.log(v);
// }
// for (let v of 'hello World') {
//     console.log(v);
// }

// let obj = {
//     a: 10,
//     b: 20
// }
// console.log(obj[Symbol.iterator]);

// Generator

let obj1 = {
    start: 1,
    end: 5,
    [Symbol.iterator]: function* () {
        let currentValue = this.start;
        while (currentValue <= this.end) {
            yield currentValue++;
        }
    }
};
let iterator = obj1[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Generator function

// function* generate() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
function* generate(collection) {
    for (let i = 0; i < collection.length; i++){
        yield collection[i];
    }
}
// let it1 = generate(str);
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

// Set- Data Structure
function isIteratble(obj) {
    return typeof obj[Symbol.iterator] === 'function';
}

let set = new Set([1, 2, 3]);
set.add(2);
set.add(4);
set.add(5);
// console.log(set.size);
// set.clear();
// set.delete(5);
// console.log(set.has(5));
// console.log(set.keys());
// console.log(set.values());
// console.log(set);
// let keyIterator = set.keys();
// let valueIterator = set.values();
// console.log(keyIterator.next());
// console.log(valueIterator.next());
// console.log(isIteratble(set));
// for (let e of set) {
//     console.log(e);
// }
// console.log(set.entries());

// Map Collection -Data Structure

let map = new Map([
    ['a', 10],
    ['b', 20],
    ['c', 30]
]);
map.set('d', 40);
map.set({ name: 'aus' }, 2020);
// console.log(map.delete('a'));
// console.log(map.size);
// console.log(map.get('d'));
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(map);

// for (let [k, v] of map) {
//     console.log(k, v);
// }

// map.forEach((v, k) => {
//     console.log(k, v);
//  });

// Weak Set

let a = { a: 10 }, b = { b: 20 };
// let set1 = new Set([a, b]);
// a = null;
// let result = [...set1];
// console.log(set1, result);
//let weakSet = new WeakSet([a, b]);
// console.log(weakSet);
//a = null;
// console.log(weakSet);
// console.log(weakSet.has(a));
// console.log(weakSet.has(b));

// Weak Map

let weakMap = new WeakMap([
    [a, 45],
    [b, 75]
]);
a = null;
// console.log(weakMap.has(a));
// console.log(weakMap.get(a))

// ES-6 Classs
// Old Syntax

// function Rectengle(width,height) {
//     this.width = width;
//     this.height = height;
// }
// Rectengle.prototype.draw = function () {
//     console.log(this);
//     console.log('Drawing...');
// }
// let r1 = new Rectengle(15, 20);
// r1.draw();

// New Syntax

// class Rectengle{
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//         this.another = function () {   
//         }
//     }
//     name = 'anik';
//     test = function () {
        
//     }
//     draw() {
//         console.log('Drawing...');
//     }
// }
// let rect1 = new Rectengle(25, 45);
// console.log(rect1);

// Static Method

// class User{
//     constructor(name, mail) {
//         this.name = name;
//         this.mail = mail;
//     }
//     print() {
//         console.log(this.name, this.mail);
//     }
//     static create(jsonString) {
//         let user = JSON.parse(jsonString);
//         return new User(user.name, user.mail);
//     }
// }
// let str1 = '{"name":"anik","mail":"helloanik@gmail.com"}';
// let u1 = User.create(str1);
// console.log(u1);
// console.log(u1 instanceof User);
// u1.print();

// 'this' in class

// function Shape() {
//     this.draw=function() {
//         console.log(this);
//     }
// }
// let s1 = new Shape();
// let draw = s1.draw;
// draw();

// class User{
//     constructor(name, mail) {
//         this.name = name;
//         this.mail = mail;
//     }
//     print() {
//         console.log(this.name, this.mail);
//     }
//     testThis() {
//         console.log(this);
//     }
//     static create(jsonString) {
//         let user = JSON.parse(jsonString);
//         return new User(user.name, user.mail);
//     }
// }
// let str1 = '{"name":"anik","mail":"helloanik@gmail.com"}';
// let u1 = User.create(str1);
// let test = u1.testThis;
// test();

// Private Data with Symbol

// const _name = Symbol();
// const _lang = Symbol();
// const _info = Symbol();
// class Custom{
//     constructor(name, lang) {
//         this[_name] = name;
//         this[_lang] = lang;
//     }
//     [_info]() {
//         console.log('Custom Info...');
//     }
// }
// let c1 = new Custom('John', 'JS');
// console.log(c1);
// console.log(Object.getOwnPropertySymbols(c1));
// console.log(Object.getOwnPropertyNames(c1));

// Private Properties with weak Map

// const _name = new WeakMap();
// const _lang = new WeakMap();
// const _info = new WeakMap();
// class Custom{
//     constructor(name, lang) {
//         this.pos = 'Admin';
//         _name.set(this, name);
//         _lang.set(this, lang);
//         _info.set(this, () => {
//             console.log(this.pos);
//          });
//     }
//     display() {
//         console.log('Custom Info...');
//         console.log(_name.get(this), _lang.get(this));
//         _info.get(this)();
//     }
// }
// let c1 = new Custom('John', 'JS');
// c1.display();

// ES-6 Getter AND Setter

// const _name = new WeakMap();
// const _lang = new WeakMap();
// const _info = new WeakMap();
// class Custom{
//     constructor(name, lang) {
//         this.pos = 'Admin';
//         _name.set(this, name);
//         _lang.set(this, lang);
//         _info.set(this, () => {
//             console.log(this.pos);
//          });
//     }
//     get name() {
//         return _name.get(this);
//     }
//     get lang() {
//         return _lang.get(this);
//     }
//     set name(n) {
//         _name.set(this, n);
//     }
//     set lang(l) {
//         _lang.set(this, l);
//     }
//     display() {
//         console.log('Custom Info...');
//         console.log(_name.get(this), _lang.get(this));
//         _info.get(this)();
//     }
// }
// let c1 = new Custom('John', 'JS');
// // c1.display();
// c1.name = 'Programmer';
// c1.lang = 'Laravel';
// console.log(c1.name);
// console.log(c1.lang);

// ES-6 - Inheritence

// class Shape{
//     constructor(color) {
//         this.color = color;
//     }
//     draw() {
//         console.log('Drawing Something...');
//     }
// }

// class Rectengle extends Shape{
//     constructor(color, width, height) {
//         super(color);
//         this.width = width;
//         this.height = height;
//     }
//     draw() {
//         console.log('Drawing A Rectengle...');
//     }
//     calulateArea() {
//         return (this.width * this.height);
//     }
// }
// let r1 = new Rectengle('Green', 10, 20);
// console.log(r1);
// r1.draw();
// console.log('Area: ' + r1.calulateArea());

// Modules in ES-6

// import Rectengle from './Rectengle.js';
// let r1 = new Rectengle('Green', 10, 20);
// console.log(r1);
// r1.draw();
// console.log('Area: ' + r1.calulateArea());

// import * as Func from './func.js';
// console.log(Func);

import { add, strLen } from './func.js';
console.log(strLen('hello') + add(2, 3));