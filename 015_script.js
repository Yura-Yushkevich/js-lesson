/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;




// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// detectPersonalLevel();
// rememberMyFilms();
writeYourGenres();
showMyDB(personalMovieDB.privat);






function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    
    while(numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели','');
    }
    
}


function rememberMyFilms() {
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
}

function detectPersonalLevel() {
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
}


function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <=3;i++) {   
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`,'');
    }
}


