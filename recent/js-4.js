// call bind

let person = {
    about : function(city){
        return `${this.name} AND ${this.mail} ${city}`;
    }
};

let anik = {
    name : 'anik',
    mail : 'anik@mail.com'
};
console.log(person.about.call(anik,'Ctg'));

// Call Bind-1

let result = {
    show : function(id){
      return `${id}-${this.name}-${this.dep}`;
    }
  };
  function factory_st(name,dep){
    return{
      name,dep
    }
  };
  let a = factory_st('Paul Haris','ECE');
  let std = {
    name : 'John Doe',
    dep : 'CSE'
  };
  let std1 = {
    name : 'John Sena',
    dep : 'EEE'
  };
  console.log(result.show.call(std,112112));
  console.log(result.show.call(std1,332211));
  console.log(result.show.call(a,335566));