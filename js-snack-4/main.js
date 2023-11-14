'use strict';

// const voidElement = [];
// let arraySum = 0;

// while( arraySum < 50) {
//     const arrayElement = prompt('inserisci un numero');
//     if(isNaN(arrayElement)){
//         alert("Inserisci un numero in cifre");
//     } else {
//          voidElement.push(arrayElement);
//          arraySum += +voidElement;
//     }
// }
// console.log(voidElement);

const voidElement = [];
let arraySum = 0;

do{
    let userNumber = +prompt('Per favore inserisci un numero');
    voidElement.push(userNumber);
    arraySum += userNumber;
    console.log(`Array: ${userNumber}`);
    console.log(`Somma: ${arraySum}`);
}while( arraySum < 50);

console.log(voidElement);