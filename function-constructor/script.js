'use strict';

function User (name, id){
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function(){console.log(`Hi, ${this.name}!!`);};
}


User.prototype.exit = function (){
   console.log(`By!!! ${this.name}`); 
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

ivan.exit();
alex.exit();