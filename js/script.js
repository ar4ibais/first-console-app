'use strict';


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && b.length <= 50 && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Неплохо');
        } else if (personalMovieDB.count >= 30) {
            console.log('Очень хорошо');
        } else {
            console.log('Произошла ошибка :( Попробуйте еще раз');
        }
    },
    showMyDB: function (privat) {
        if (privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const answer = prompt(`Ваш любимый жанр под номером ${i + 1}`);

            if (answer != '' && answer != null) {
                personalMovieDB.genres[i] = answer;
                console.log(`Любимый жанр №${i + 1} - это ${personalMovieDB.genres[i]}`);
            } else {
                i--;
            }
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};