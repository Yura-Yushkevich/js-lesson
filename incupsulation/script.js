'use strict';

class User{
        constructor (name, age){
            this.name = name;
            this._age = age;
        }

        #surname = 'Petrychenko';

        say(){
            console.log(`Имя пользователя: ${this.name}, возраст ${this._age}`);
            console.log(`Фамилия: ${this.#surname}`);
        }

        get age(){
        return this._age;  
        }

        set age(age){
            if(typeof (age === 'number') && age>0 && age <110){
                this._age = age;
            }else{
                console.log('Недопустимое значение');
            }
        }
}



const ivan = new User('Ivan', 25);

// ivan.age = 3000;

console.log(ivan.name);
console.log(ivan.age);
console.log(ivan.surname);

ivan.say();