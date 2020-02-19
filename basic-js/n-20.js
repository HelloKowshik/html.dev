// Complete Js

// Factory Pattern

function factory(name,price,branch){
    return {
     name,price,branch,
     display (){
     console.log(`${this.name}-${this.price}-${this.branch}`);
     }
   }
   }
   factory('cd',120,'ctg').display();
   factory('av',220,'raj').display();
   factory('mn',320,'dha').display();


// Constructor

function Factory(name,model,price,branch){
    this.name = name;
    this.model = model;
    this.price = price;
    this.branch = branch;
    this.display = ()=>{
      return `${this.name}-${this.model}-${this.price}-${this.branch}`;
    }
    return this;
  }
  
  let factory = new Factory('xiaomi','note-8',14999,'ctg-GEC');
  console.log(factory.display());

  
// call(),bind(),apply()

function display(e,er){
    console.log(`hi ${this} it's ${e} From ${er}`);
  };
  let a = display.bind('Howdy!','Albert','LA');
  a();
  display.call('Robert!','Neutone','NY');
  display.apply('Alfredo',['Roman','Boston']);

  
