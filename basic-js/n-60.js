function User(name, mail) {
    this.name = name;
    this.mail = mail;
    this.display = function () {
        console.log(this.name + ' - ' + this.mail);
    }
}

let u1 = new User('anik', 'anik@bd.com');
console.log(u1);
console.log(User.prototype);
u1.display();