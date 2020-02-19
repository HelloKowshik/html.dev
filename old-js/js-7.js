// Object

// let profile = {
//     name : 'sadia fatema maula',
//     loc : 'Dhaka',
//     age : 24,
//     hobby : 'animal lover',
//     profession : 'student',
//     profileInfo(){
//         return `${this.name} ${this.loc} ${this.age} ${this.hobby} ${this.profession}`;
//     }
// };

// let res = profile.profileInfo();
// console.log(res);
// document.write(res+ '<br>');
// document.write('<br>');

function factory(a,b,c){   //factory function
    return{
        name : a,
        price : b,
        weight : c,
        details(){
            return `${this.name} - ${this.price} - ${this.weight}`;
        }
    };
};

//let t = factory('dove',60,'250 gm');
let t = factory('lux',60,'350 gm');
console.log(t.details());
document.write(t.details());
document.write(
    '<table border="1px"><tr><th>Name</th><th>Price</th><th>Weight</th></tr><tr><td>'+ t.name+'</td><td>'+t.price+
    '</td><td>'+t.weight+'</td></tr>'
    +
    '</table>'
);