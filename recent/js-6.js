// Copying Object

let product = {
    name : 'Sony',
    price : 32000,
    size : '32 inch'
  }
  
//   let copy = {};
//   for(let val in product){
//     copy[val] = product[val];
//   }
//console.log(copy.name,copy.price,copy.size);

 // let copy = Object.assign({showRoom: 'Agrabad',customer_id:112211},product);

 let copy = {...product,showRoom: 'Agrabad'};
  console.log(copy);