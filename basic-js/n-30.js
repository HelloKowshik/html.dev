// let obj = {
//     name: 'anik',
//     mail: 'anik@bd.com'
// };
// obj['id'] = 112;
// let sex = 'fucker';
// obj[sex] = 'Ass Sucker';
// obj.fucker = null;
// console.log(obj);
// delete obj.fucker;
// console.log(obj);

// let obj1 = {
//     a: 11,
//     b: 12,
//     c: 22
// };

// for (let key in obj1) {
//     console.log(key + ' : ' + obj1[key]);
// }
// let obj2 = {
//     a: 11,
//     b: 12
// };

// if (obj1.a === obj2.a && obj1.b === obj2.b) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

let obj4 = {
    x: 40,
    y: 50,
    z: 60
};

console.log(Object.keys(obj4));
console.log(Object.values(obj4));
console.log(Object.entries(obj4));
console.log('--------------------');
let obj5 = Object.assign({}, obj4);
obj5.m = 'new';
obj5.x = 100;
console.log(obj4, obj5);