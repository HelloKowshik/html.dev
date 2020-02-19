// Constructor Function in Object

function Product(name,price,weight,batch_no){
    this.name = name,
    this.price = price,
    this.weight = weight,
    this.batch_no = batch_no,
    this.productInfo = function(){
      return `${this.name}-${this.price}
      -${this.weight}-${this.batch_no}`;
    }
}
let p = new Product('Lux','60 Taka','120 gm',112);
console.log(p.productInfo());
let p1 = new Product('Dove','70 Taka','135 gm',1112);
console.log(p1.productInfo());