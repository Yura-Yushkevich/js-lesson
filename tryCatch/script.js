'use strict';

try{
console.log('Normal');
console.log(a);
console.log('result');

}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}


console.log('Привет!!!');


try{
    document.querySelector('.active').addEventListener('click',()=>{
        console.log('click');
    });
}catch(e){
    console.log(`${e.message} - Кнопок на странице нет`);
}

console.log('normal');