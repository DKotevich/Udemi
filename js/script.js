/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";

const numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Odin iz poslednih prosmotrennih filmov?", ""),
        b = prompt("Na skolko vi ocenite ego?", "");
    if (a != null && (b != null) & (a != "") && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
    }
    else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count <= 10) {
    console.log('Prosmotreno malofilmov');
}
else if (personalMovieDB.count >= 10 && personalMovieDB <= 30) {
    console.log('Vi klassicheskiy zritel');
} else if (personalMovieDB.count >= 30) {
    console.log('vi kinoman');
}
else {
    console.log('Error!');
}


console.log(personalMovieDB);
