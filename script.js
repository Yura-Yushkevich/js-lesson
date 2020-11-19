'use strict';

const   btns = document.querySelectorAll('button'),
        wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);

// console.log(btns[0].classList.item(0));
// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remove('red'));
// console.log(btns[0].classList.toggle('abc'));
// console.log(btns[0].classList.toggle('abc'));


// btns[0].addEventListener('click', (e)=>{
//     e.preventDefault();
//     if (!btns[1].classList.contains('red')){
//         btns[1].classList.add('red');
//     }else{
//         btns[1].classList.remove('red'); 
//     }   
// });


wrapper.addEventListener('click', (e)=>{
    // console.dir(e.target);
    if(e.target && e.target.tagName == 'BUTTON'){
        console.log('Hello');    
    }
});








