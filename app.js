const movies = require('./movies.json');

/**
 * The functions gets the firts ten movies from the array movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    let m = movies;
    let firtsTen = m.slice(0,10);
    return firtsTen;
}

/**
 * The functions gets the movies with the genres that are entered by parameter
 * The Genres must by entered in alphabetical order, e.g. (Comedy, Drama, Fanatasy, Horror)
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n`);
    console.log(firstTenMovies);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();