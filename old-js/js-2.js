/*let obj = {
    name:'kowshik',
    topic:'js basic',
    loc:'Chittagong'
};
document.write(obj.name+' ');
document.write(obj.topic+' ');
document.write(obj['loc']+' ');
*/
let movie = {
    movieOne:{
    id: 110,
    name: 'Avengers: Infinity War',
    company: 'Marvel Studio',
    year: 2018,
    rating: 8.6
    },
    movieTwo: {
    id: 111,
    name: 'Avengers: End Game',
    company: 'Marvel Studio',
    year: 2019,
    rating: 8.9
    }
}
document.write(movie.movieOne.id+' . '+movie.movieOne.name+' By '+movie.movieOne.company);
document.write("<br>");
document.write(movie.movieTwo.id+' . '+movie.movieTwo.name+' By '+movie.movieTwo.company);
