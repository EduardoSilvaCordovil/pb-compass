const movies = [
    {id: 1, movieName: 'Avatar'},
    {id: 2, movieName: 'Shrek'},
    {id: 3, movieName: 'Hobbit'}
]
console.log(movies.includes({id: 1, movieName: 'Avatar'})) // ERRO

console.log(movies.find(function(movie) {
    return movie.movieName == 'Sherek'
}))

// Arrow Function
const movies2 = [
    {id: 1, movieName: 'Avatar'},
    {id: 2, movieName: 'Shrek'},
    {id: 3, movieName: 'Hobbit'}
]
console.log(movies.includes({id: 1, movieName: 'Avatar'})) // ERRO

console.log(movies.find(movie => movie.movieName == 'Sherek'
))