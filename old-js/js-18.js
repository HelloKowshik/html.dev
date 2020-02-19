// Array-2

let movies= [
    {
      id:1121,
      name:'war Zone',
      genere : 'Action',
      year : 2019
    },
    
    {
      id:1123,
      name:'Bang Bang',
      genere : 'Action',
      year : 2017
    },
    
    {
      id: 1122,
      name : 'Housefull-4',
      genere : 'Comedy',
      year : 2019
    }
  ];
  
  let f = movies.filter(function(e){
    return 'Action' === e.genere
  });
  console.log(f);

  let n1 = [11,22,33,44,55];
  let n2 = [66,77,88,99,100];
  let n3 = [111,222,333,444];
  let e = n1.concat(n2,n3);
  let fe = [...n1,...n2,...n3];
  console.log(e);
  console.log(fe);