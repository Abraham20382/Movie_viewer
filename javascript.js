let numberOfFilms = prompt("Скільки фільмів ви вже переглянули?", "20");

let personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres: [],
    privat: false,
};

let oneOfLastFilms = prompt("Один із останніх фільмів?");
let howValueIt = prompt("На скільки оціните його?")
let oneOfLastFilms_second = prompt("Один із останніх фільмів?");
let howValueIt_second = prompt("На скільки оціните його?");

personalMovieDB.movies[oneOfLastFilms] = howValueIt;
personalMovieDB.movies[oneOfLastFilms_second] = howValueIt_second;
console.log(personalMovieDB);