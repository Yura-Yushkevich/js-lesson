'use strict';

// const num = 12.2;
// console.log(Math.round(num));

// const test = '12.2px';
// console.log(parseInt(test));

function first() {
    setTimeout(function name() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang,callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}


function done() {
    console.log('Я прошел этот урок');  
}


learnJS('JavaScript', done);
