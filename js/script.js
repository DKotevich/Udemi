/* eslint-disable indent */
/* eslint-disable quotes */
"use strict";
/*
let numberOfFilms;
function start() {
    numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Skolko filmov vi uzhe prosmotreli?", "");

    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Odin iz poslednih prosmotrennih filmov?", "").trim(),
            b = prompt("Na skolko vi ocenite ego?", "");
        if (a != null && (b != null) && (a != "") && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
        }
        else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();
function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();
//ILI:

//detectPersonalLevel();
//function showMyDB(hidden) {
//    if (!hidden) {
//       console.log(personalMovieDB);
//   }
//}
//showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Vash lubimyy zhanr pod nomerom ${i}`);
    }
}
writeYourGenres();*/

// //metod massivov split
// const str = prompt(', ');
// const products = str.split(', '); //iz stroki - poluchaem massiv
// products.sort();//sortirovka massiva (kak stroku)
// console.log(products.join('; ')); //iz massiva - poluchaem stroku

//Zadacha na debug
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';
    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < (+average.slice(0, -1))) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice)); debugger;

function transferWaitors(data) {
    let copy = JSON.parse(JSON.stringify(data));//правильное глубокое копирование обекта

    copy.waitors[0] = { name: 'Mike', age: 32 };
    return copy;
}

transferWaitors(restorantData);