'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели','');

        while(personalMovieDB.count == '' || isNaN(personalMovieDB.count) || personalMovieDB.count == null){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели','');
        } 
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Один из последних просмотренных фильмов?','');
            let reitFilm = prompt('На сколько оцените его?','');
            
            if (lastFilm !='' && lastFilm !=null && reitFilm !='' && reitFilm !=null){
                if(lastFilm.length < 50 && reitFilm <50){
                    personalMovieDB.movies[lastFilm] = reitFilm;
                } else{
                    lastFilm = prompt('Один из последних просмотренных фильмов?','');
                    reitFilm = prompt('На сколько оцените его?','');
                }        
            } else{
                i--;
            }   
        }  
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
         console.log ('Просмотрено довольно мало фильмов');
         } else if(personalMovieDB.count >=10 && personalMovieDB.count <30){
             console.log ('Вы киноман');
         }else if(personalMovieDB.count >=30){
             console.log ('Вы классический зритель');    
         }
         else{
             console.log ('Произошла ошибка');
         } 
     },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3;i++) {               
            let genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
            if (genre !='' && genre !=null){
                personalMovieDB.genres[i-1] = genre;
            }else{
                genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
                i--; 
            }            
        }
        personalMovieDB.genres.forEach((item, i) =>{
            console.log(`Любимый жанр № ${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat){
            personalMovieDB.privat = false; 
        }else{
            personalMovieDB.privat = true;  
        }  
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);
