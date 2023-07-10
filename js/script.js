const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
    const b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && b.length <= 50 && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Чел хорош');
} else if (personalMovieDB.count >= 30) {
    console.log('Мега хорош');
} else {
    console.log('мяу');
}