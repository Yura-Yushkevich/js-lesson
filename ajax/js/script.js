'use strict';

const   inputRub = document.querySelector('#rub'),
        inputUsd = document.querySelector('#usd');


inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    // request.open(method, url, async, login, pass); Пример метода open
    
    request.open('GET', 'js/current.json'); //собираем настройки
    request.setRequestHeader('Content-type','aplication/json; charset=utf-8');    //отправка заголовков 
    request.send();   //отправляем запрос

    request.addEventListener('readystatechange',() =>{ // отслеживает изменение состояния запроса
        if(request.readyState === 4 && request.status === 200){
            
            const res = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value/res.current.usd).toFixed(2);
        }else{
            inputUsd.value = "Что-то пошло не так";
        }    
    });

    // status - код ответа от серевер
    // statusText - текстовка кода ответа
    // response - сам ответ
    // redyState - текущее состояние запроса
    
    
});