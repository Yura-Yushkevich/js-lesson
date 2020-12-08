'use strict';

// function showThis(a,b){
//     console.log(this);

//     function sum(){
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4,5); 


// const obj = {
//     a: 20,
//     b: 15,
//     sum: function (){
//         function shout(){
//           console.log(this);  
//         }
//         shout();
             
//     },
// };

// obj.sum();


// function User (name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function(){console.log(`Hi, ${this.name}!!`);};
// }

// let ivan = new User('Ivan', 28);

// function sayName(surname){
//     console.log(this);
//     console.log(this.name+surname);
// }

// const user = {
//     name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user,['Killer']);

// function count(num){
//     console.log(this);
//     return this*num;
// }

// const double = count.bind(4);
// console.log(double(3));


const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    this.style.background = 'red';
});


const obj = {
    num: 5,
    sayNumber: function(){
         const say = ()=>{
             console.log(this);   
         };
         say();   
    }
};

obj.sayNumber();


const double = a => a * 2;   