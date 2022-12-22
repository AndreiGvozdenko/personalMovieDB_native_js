'use strict'; //строгий режим


//база данных, глобальный объект
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');        
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++ ) {
            const nameMovie = prompt('Один из последних просмотренных фильмов?', '').trim();
            const feedbackMovie = prompt('Насколько оцениваете его?', '');
        
            if (nameMovie != null && feedbackMovie != null && nameMovie != '' && feedbackMovie != '' && 
            nameMovie.length  < 50) {
                personalMovieDB.movies[nameMovie] = feedbackMovie;
                console.log('done');
                } else {
                    console.log('error');
                    i--;
                }
        }
    },
    detectPersonaLevel: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != null && personalMovieDB.count != '') {
            prompt("Просмотрено довольно мало фильмов");
        } else {
            console.log('error');
            console.log("Произошла ошибка");}
        if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            prompt("Вы классический зритель");
        }
        if (personalMovieDB.count >= 30) {
            prompt("Вы киноман");
        }
    },
    showMyDB: function() {
        if(personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        let gener
        for (let i = 1; i < 4; i++) {
            gener = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (gener != null && personalMovieDB.count != '') {
                personalMovieDB.genres[i-1] = gener;
            } else {
                console.log('error');
                i--; 
            }
        }
        personalMovieDB.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false
        }
    }
};
// personalMovieDB.start(); //чтобы функция заработала, не забывай её вызвать
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonaLevel();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();





















