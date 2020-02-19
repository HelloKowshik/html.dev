// Array-4

// Array Itaration

let a1 = [253,244,208,264];
a1.forEach(function(e,index,arr){
  console.log(index,e);
  //console.log(arr)
});

for(let n of Object.entries(a1)){
    console.log(n);
}

for(let [n,n1] of Object.entries(a1)){
    console.log(n,n1);
}  

// Array Sorting

let movies= [
    {
      id:2,
      name : 'War'
    },
    {
      id:1,
      name : 'houseful-4'
    },
    {
      id:3, 
      name : 'Bala'
    }
  ];
  let r2 = movies.sort(function(a,b){
    //return a.id-b.id;
    //return (a.name.toLowerCase>b.name.toLowerCase ? 1:-1) || 0;
    return (a.id>b.id ? 1:-1) || 0;
    // if(a.id>b.id) return 1;
    // if(a.id<b.id) return -1;
    // return 0;
  });
  console.log(r2);