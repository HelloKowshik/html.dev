// Call,Apply

function myFunc(c, d) {
    console.log(this);
    console.log(this.a + this.b + c + d);
}
//myFunc(1,2);
//myFunc.call({ a: 20, b: 30 }, 8, 9);
//myFunc.apply({ a: 100, b: 200 }, [30, 40]);

// Bind

// var testBind = myFunc.bind({ a: 96, b: 82 });
// testBind(20, 2);
var testBind = myFunc.bind({ a: 96, b: 82 }, 20, 2);
//testBind();

// Pass by Value Vs Pass by Referrence
// Call by Value Vs Call by Referrence

var n = 10;
var obj = {
    a: 10,
    b: 15
};
function change(e) {
    e = e + 100;
    console.log(e);
}
function changeMe(e) {
    e.a = e.a + 100;
    e.b = e.b + 200;
    console.log(e);
}

change(n);
console.log('N= ' + n);
changeMe(obj);
console.log('a= ' + obj.a + ' b= ' + obj.b);