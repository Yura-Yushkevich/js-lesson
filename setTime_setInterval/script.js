'use strict';
// 1) Вариант
// const timer = setTimeout(function(){
//     console.log('Hello');
// },2000);

// 2) Вариант
// const timer = setTimeout(function(text){
//     console.log(text);
// },2000,'Hello');

// 3) Вариант
// const timer = setTimeout(logger,2000);

// clearInterval(timer);

// function logger(){
//     console.log('Hello');
// }


// const   btn = document.querySelector('.btn');
// let timerId, i=0;

// btn.addEventListener('click', (e)=>{
//     // const timerId = setTimeout(logger,2000);
//     timerId = setInterval(logger,2000);
// });



// function logger(){
//     if(i===3){
//         clearInterval(timerId);        
//     }
//     console.log('Hello');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log(id);
//     console.log('Hello');
//     id = setTimeout(log, 500);
// },500);

const   btn = document.querySelector('.btn');

btn.addEventListener('click', myAnimation);


function myAnimation (){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame,10);

    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top =pos+'px';
            elem.style.left =pos+'px';
        }
    }

}