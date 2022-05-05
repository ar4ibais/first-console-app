"use strict";

let number0Films;

function start() {
  number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while(number0Films == '' || number0Films == null || isNaN(number0Films)) {
    number0Films = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMoviesDB = {
  count: number0Films,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let i = 0;

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMoviesDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMoviesDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMoviesDB);
  }
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres() {
  for(let i = 1; i <= 3; i ++) {
    personalMoviesDB.genres[i - 1] = 
    prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();



console.log(personalMoviesDB);