"use strict";

const personalMoviesDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start:  function() {
    personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  
    while(personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
      personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    let i = 0;
    while (i < 2) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = +prompt("На сколько оцените его?", "");
      
      if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMoviesDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i --;
      }
    
      i ++;
    }
  },
  detectPersonalLevel: function () {
    if (personalMoviesDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMoviesDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMoviesDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMoviesDB.privat == false) {
      personalMoviesDB.privat = true;
    } else {
      personalMoviesDB.privat = false;
    }
  },
  writeYourGenres: function () {
    for(let i = 1; i <= 3; i ++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);
      if (genre == '' || genre == null) {
        console.log('Вы ввели некорректные данные');
        i --;
      } else {
        personalMoviesDB.genres[i - 1] = genre;
      }
    }
    personalMoviesDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};


console.log(personalMoviesDB);