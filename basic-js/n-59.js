// Inheritence & Composition

// Object literal
var canEat = {
    eat: function () {
        console.log('Eating...');
    }
};
var canWalk = {
    walk: function () {
        console.log('Walking...');
    }
};
var canSweem = {
    sweem: function () {
        console.log('Swimming...');
    }
};
function mixing(target, ...sources) {
    Object.assign(target, ...sources);
}
function Person(name) {
    this.name = name;
}
function GoldFish(name) {
    this.name = name;
}
mixing(Person.prototype, canWalk, canEat);
mixing(GoldFish.prototype, canEat, canSweem);
var p1 = new Person('anik');
var f1 = new GoldFish('Ball Cutter');
console.log(p1);
console.log(f1);
// var person = Object.assign({ name: 'Person' }, canEat, canWalk);
// console.log(person);