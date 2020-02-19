// function Person(name) {
//     this.name = name;
// }
//var p1 = new Person('Anik');
//console.log(p1);

var person = {
    name: 'kr anik'
};
//console.log(person);
// for (let i in person) {
//     console.log(i);
// }

//console.log(Object.keys(person));
var descriptor = Object.getOwnPropertyDescriptor(person, 'name');
//console.log(descriptor);
var baseObj = Object.getPrototypeOf(person);
var baseDescriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString');
//console.log(baseDescriptor);
Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false,
    value: 'kowshikur rahman'
});