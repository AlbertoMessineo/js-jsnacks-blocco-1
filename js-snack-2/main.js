'use strict';
// PROMPTS DATA
const elementFirstWord = prompt('Insersci una parola');
const elementSecondWord = prompt("Insersci un'altra parola");

if (elementFirstWord.length > elementSecondWord.length){
    console.log(elementSecondWord);
    console.log(elementFirstWord);
}
else if(elementFirstWord.length === elementSecondWord.length){
    console.log('Le parole hanno la stessa lunghezza');
}
else{
    console.log(elementFirstWord);
    console.log(elementSecondWord);
}