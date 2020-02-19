//Math Object

function doMath(e){
    return Math.floor(Math.random()*Math.floor(e));
  }
  console.log(doMath(2));
  console.log(doMath(2));
console.log(Math.round(Math.random()*10));
console.log(Math.ceil(Math.random()*5));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    console.log(min);
    console.log(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  console.log(getRandomInt(2.10,2.52));