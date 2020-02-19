// Array Cardio By Wes Bos

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 
  'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem',
   'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter',
    'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 
    'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra',
     'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
      'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine',
       'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // 1. Filter the list of inventors for those who were born in the 1500's

    let filterResult = inventors.filter(e=>{
        if(e.year>=1500 && e.year<=1600){
            return true;
        }
    })
    console.table(filterResult);

   // 2. Give us an array of the inventor first and last names

   let firstLastName = inventors.map(e=>{ return `${e.first} ${e.last}`});
   console.table(firstLastName);

   // 3. Sort the inventors by birthdate, oldest to youngest

   let SortedData = inventors.sort((a,b)=>(a.year>b.year)? 1:-1
   );
   console.table(SortedData);

   // 4. How many years did all the inventors live?

   let yearsLived = inventors.reduce((a,b)=>{
       return a+(b.passed-b.year);
   },0)
   console.table(yearsLived);

   
    // 5. Sort the inventors by years lived

    let oldest = inventors.sort((a,b)=>{
        let last = a.passed - a.year;
        let next = b.passed - b.year;
        return last>next? -1:1;
    })
    console.table(oldest);

    
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // let category = document.querySelector('.mw-category');
    // let lists = Array.from(category.querySelectorAll('a'));
    // let de = lists.map(e=>e.textContent).filter(streetName=>streetName.includes('de'));

     // 7. sort Exercise
    // Sort the people alphabetically by last name

    const alpha = people.sort((lastOne, nextOne) => {
        const [aLast, aFirst] = lastOne.split(', ');
        const [bLast, bFirst] = nextOne.split(', ');
        return aLast > bLast ? -1 : 1;
      });
      console.table(alpha);

      // 8. Reduce Exercise
    // Sum up the instances of each of these

    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 
    'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
    let transport = data.reduce((obj,item)=>{
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    },{});
    console.table(transport);

    const peoples = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];

      // 9. Array.prototype.some() // is at least one person 19?
      let isAdult = peoples.some(person=>{
          let current = (new Date()).getFullYear();
          if(current-person.year>=19){
              return true;
          }
      });
  console.log({isAdult});

  // 10. Array.prototype.every() // is everyone 19?

  let allAdult = peoples.every(person=>{
    let current = (new Date()).getFullYear();
    if(current-person.year>=19){
        return true;
    }
});
console.log({allAdult});


    // 11. Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    let com = comments.find(txt=>{
        if(823423 === txt.id){
            return true;
        }
    });
    console.table(com);

    // 12. Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    let index = comments.findIndex(txt=>823423===txt.id);
    console.log(index);
     // comments.splice(index, 1);
     const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];