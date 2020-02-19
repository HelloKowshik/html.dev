//Object-2

//Constructor function

function EmployeeProfile(a,b,c){
    this.name = a,
    this.post = b,
    this.salary = c,
    this.showAll = function(){
        return `${this.name} | ${this.post} | ${this.salary}`;
    }
    return this;
}

let em1 = new EmployeeProfile('Abul Kashem','Sr.Programmer',45000);
let em2 = new EmployeeProfile('Abul Hasnat','Jr.Programmer',25000);
let em3 = new EmployeeProfile('Abul Monsur','Lead Developer',65000);
console.log(em1.showAll());
console.log(em2.showAll());
console.log(em3.showAll());