'use strict';


const solder = {
    health: 400,
    armor: 100,
    sayHello: function () {
      console.log('Hello');  
    },
};

const jonh = Object.create(solder);



// const john = {
//     health: 100,
// };


// john.__proto__ = solder;

// Object.setPrototypeOf(john,solder);

jonh.sayHello();

