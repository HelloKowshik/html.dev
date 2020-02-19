// Object-4
//Object copy

let product = {
    name : 'Cheese Ball',
    company : 'Bombay Sweets',
    price : '10 Taka'
};
let product1 = {};
for(let desc in product){
    product1[desc] = product[desc];
}
console.log(product1);

let product2 = Object.assign({weight :'120 gm'},product);
console.log(product2);

let product3 = {...product,type: 'Chips'};
console.log(product3);

