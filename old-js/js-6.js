//loop
let taka = 10;
while(taka<20){
    console.log('I have taka: '+taka);
    taka++;
}

let str = 'Steve Smith';
for(let i = 0; i<str.length;i++){
    console.log(str[i]);
    document.write(str[i]);
    
}
document.write("<br>");

let a = ['warner','smith','cummins','lyon','starc'];
let i;
for(i = 0; i<a.length; i++){
    console.log(a[i]);
    document.write(','+a[i]);
}

document.write("<br>");

let b =['warner','smith','cummins','starc'];
for(let tmp of b){                               //Array looping
  console.log(tmp);
  document.write(tmp+' ');
}

document.write("<br>");

let obj = {
    team: 'Australia',
    title: '5 times',
    lastWin: 2007,
    captain: 'Aaron Finch',
    mvp: 'Steven Smith'
};

for(let tmp in obj){                            //Object looping
    console.log(tmp+' : '+obj[tmp]);
    document.write(tmp+' : '+obj[tmp]+"<br>");
}