// Method in Object

let team = {
    'openar' : 'Naim-Liton',
    'keeper' : 'Musfiqur Rahim',
    'pacer'  : 'Mustafiz-Al Amin-Safiul',
    'spiner' : 'Aminul',
    teamDes(){
      return `${this.openar}, ${this.spiner}, ${this.keeper}`;
    }
  };
  
    console.log(team.teamDes());


// Factory Function in Object

function product(name,price,weight,batch_no){
    return{
      name,price,weight,batch_no,
      productInfo(){
        return `${this.name}-${this.price}-${this.weight}-${this.batch_no}`;
      }
    };
  }
  let p = product('Lux','60 Taka','120 gm',112);
  console.log(p.productInfo());
  let p1 = product('Dove','70 Taka','135 gm',1112);
  console.log(p1.productInfo());
  let p2 = product('Pepsodent','65 Taka','115 gm',101011);
  console.log(p2.productInfo());
