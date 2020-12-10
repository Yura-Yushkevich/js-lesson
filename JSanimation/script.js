'use strict';

const   btn = document.querySelector('.btn');
let pos = 0;
const elem = document.querySelector('.box');
let id=0; 

// function myAnimation (){
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame,10);

//     function frame(){
//         if(pos == 300){
//             clearInterval(id);
//         }else{
//             pos++;
//             elem.style.top =pos+'px';
//             elem.style.left =pos+'px';
//         }
//     }

// } 

function myAnimation (){
    if(pos<300){
        pos++;
        elem.style.top =pos+'px';
        elem.style.left =pos+'px';
      requestAnimationFrame(myAnimation);
    }
} 

btn.addEventListener('click', ()=> {
    id = requestAnimationFrame(myAnimation);
    console.log(id);
});



// let id = requestAnimationFrame(myAnimation);

console.log(id);
