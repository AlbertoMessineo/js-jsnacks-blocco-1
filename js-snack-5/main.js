'use strict';

const num = Number(prompt('Per favore inserisci un numero'));
console.log(+num);
for (let i = 0; i < +num; i++){
    console.log(Array.from({length: 10}, () => Math.floor(Math.random() * 100)));
} 