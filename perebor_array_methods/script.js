'use strict';

//filter

const names = ['Ivan', 'Ann', 'Kseniya', 'Voldemart', 'Юра', 'Александр', 'София'];


const shortNames = names.filter((name)=>{
    return name.length < 5;
});

console.log(shortNames);



//map

const answer = ['IvAn', 'Anna', 'Hello'];

const result = answer.map((item)=>{
    return item.toLowerCase();
});

console.log(result);


//  every/some

const everyArray = [4, 'cxvxvx', 'dsfsfsfs'];

//Все элементы должны соответствовать условию
console.log(everyArray.every((item)=>{
    return typeof(item) === 'number';
}));


const someArray = [4, 'cxvxvx', 'dsfsfsfs'];

// Хотя бы 1 элемент соответствует условию
console.log(someArray.some((item)=>{
    return typeof(item) === 'number';
}));




//reduce

const arr = [4, 5, 1, 3, 2, 6];



const resault = arr.reduce((sum, current)=>{
    return sum + current;
    // return sum * current;
}, 3);

console.log(resault);



const obj ={
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item=>item[1] === 'persone')
.map(item=>item[0]);



console.log(newArr);


