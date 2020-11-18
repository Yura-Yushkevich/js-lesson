'use strict';

const   btns = document.querySelectorAll('button'),
        overlay = document.querySelector('.overlay');

// btn.onclick = function(){
//     alert('click');   
// };




// btn.onclick = function(){
//     alert('Second click');   
// };

let i = 0;

const deleteElement = (e)=>{
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i==1){
    //     btn.removeEventListener('click', deleteElement);
    // }
};

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once:true});
});

// btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('нажал на ссылку '+ e.target);    
});


