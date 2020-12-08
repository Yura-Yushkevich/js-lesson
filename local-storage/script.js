'use strict';


// localStorage.setItem('number', 5);

// // localStorage.removeItem('number');

// localStorage.clear();
// console.log(localStorage.getItem('number'));


const   checkbox = document.querySelector('#checkbox'),
        form = document.querySelector('form'),
        change = document.querySelector('#color');


if(localStorage.getItem('isChecked')){
    checkbox.checked = true;
}

if(localStorage.getItem('bg')==='changed'){
    form.style.backgroundColor = 'red';
}


checkbox.addEventListener('change', (e)=>{
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', (e)=>{
    if(localStorage.getItem('bg')==='changed'){
            localStorage.removeItem('bg');
            form.style.backgroundColor = '#FFF';
    }else{
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});


const person ={
    name: 'Alex',
    age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('person', serializedPerson);
console.log(serializedPerson);
console.log(serializedPerson.name);
const a = JSON.parse(localStorage.getItem('person'));
console.log(a.name);
