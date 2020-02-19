
function greet(msg) {
    function greetings(name) {
       return msg + ', ' + name;
        //return msg + name;
    }
    return greetings;
}

//var g = greet('Congratulations');
//console.log(typeof g(), g());
//console.log((undefined + undefined));
//console.log(g('Team Srilanka'));

function base(b) {
    return function (n) {
        var result = 1;
        for (var i = 0; i < b; i++){
            result = result * n;
        }
        return result;
    }
}

var base10 = base(10);
var base5 = base(5);
console.log(base10(2));
console.log(base5(2));