// Modern Js - Regular Expression

var r = new RegExp('^[a-z][a-z0-9_]*','i');      //RegExp Constructor
var str = 'mi_9t';
console.log(r.test(str));

var r1 = /\w+@\w+\.\w{2,5}/gs;                  //Literal
var str1 = 'kuddus_420@boyati.com';
//console.log(r1.test(str1));
console.log(r1.exec(str1));

// English To Bangla Converter

var num = '0195 99 95 84';
var changed = num.replace(/0/g,"০");
changed = changed.replace(/1/g,"১");
changed = changed.replace(/2/g,"২");
changed = changed.replace(/3/g,"৩");
changed = changed.replace(/4/g,"৪");
changed = changed.replace(/5/g,"৫");
changed = changed.replace(/6/g,"৬");
changed = changed.replace(/7/g,"৭");
changed = changed.replace(/8/g,"৮");
changed = changed.replace(/9/g,"৯");
console.log(changed);