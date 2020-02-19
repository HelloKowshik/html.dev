let std = {
    name: 'abrar fahad',
    id : 112233,
    show(){
        return `${this.name} | ${this.id}`;
    }
}

function getInfo(std){
    console.log(std);
}

getInfo({...std});