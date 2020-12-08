'use strict';

const persone = {
    name: 'Alex',
    tel: '+7223332323',
    parents:{
        mom: 'Olga',
        dad: 'Mike'
    }
};


const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Natasha';

console.log(clone);
console.log(persone);