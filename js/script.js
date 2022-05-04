"use strict";

const number0Films = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
  count: number0Films,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// for (let i = 0; i < 2; i ++) {
//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = +prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMoviesDB.movies[a] = b;
//     console.log('done');
//   } else {
//     console.log('error');
//     i --;
//   }
// }

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
};

if (personalMoviesDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMoviesDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMoviesDB);