'use strict';
if(4){
  console.log('OK');  
} else {
    console.log('Error');
}





// if (num < 49){
//     console.log('Error');
// } else if (num > 100){
//     console.log('Много');
// } else{
//     console.log('OK!');
// }

// (num == 50) ?  console.log('OK!') : console.log('Error');


// switch (num) {
//     case 49:
//         console.log('Неверно!');
//         break;    
//     case 100:
//         console.log('Неверно!');
//         break;
//         case 50:
//         console.log('Верно!');
//         break;       

//     default:
//         console.log('Не в этот раз!');
//         break;
// }




// while (num < 55) {
//     console.log (num);
//     num++;    
// }


// do {
//     console.log (num);
//     num++; 
// } while (num < 55);


let num = 50;
for (let i = 1; i < 10; i++) {
    if (i == 6){
        // break;
        continue;
    }
    console.log (i);
}