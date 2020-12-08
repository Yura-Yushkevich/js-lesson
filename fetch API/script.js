'use strict';

fetch('https://jsonplaceholder.typicode.com/posts',{
    //Добавляем объект с настройками
    method: 'POST',
    body: JSON.stringify({name:'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }    
})
.then(response => response.json())
.then(json => console.log(json));


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json));