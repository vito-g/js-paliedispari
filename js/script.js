// -Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// -Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare, usate i commenti per individuare gli ostacoli da superare e gli aspetti della logica più ostili
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// 3. Se volete, sviluppate tutto nello stesso file html + js, o dividete in cartelle differenti. Insomma, fate come ve pare
// ---------------------------------------------------------------------------------

// Es.1 OK:

// var flag = true;
// // Creazione di una funzione che verifichi se la parola inserita è palindroma o no
// function isPalindrome() {
//   var word = prompt('Inserisci una parola');
//   // console.log(word);
//   // Creazione di un Array che ha per item le singole lettere componenti la parola inserita dall'utente
//   var charWordArray = word.split('');
//   // console.log(charWordArray);
//   for ( var i = 0; i < charWordArray.length; i++) {
//     if (charWordArray[i] !== charWordArray[-i + charWordArray.length - 1]) {
//       flag = false;
//     }
//   }
//   if (flag === false) {
//     alert('La parola inserita non è palindroma');
//   } else {
//     alert('La parola è palindroma');
//   }
// }
//
// isPalindrome();

// -------------------------------------------------------------------------------------

// ES.2 OK:

var evenAndOdd = prompt('Il risultato finale di questo test sarà pari o dispari ?');
console.log('Hai pronosticato un numero: ' + evenAndOdd);
var number = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log('Hai inserito il numero: ' + number);


if (!(evenAndOdd)) {
  alert('devi rispondere alla domanda');
} else {
  // alert('Ok passiamo alla prossima richiesta');
  if ((number > 0) && (number <= 5)) {
    alert('grazie');
  } else {
    alert('Devi inserire un numero da 1 a 5')
  }
}

function numberRandom(a, b) {
    var random = Math.floor((Math.random() * b) + a);
    return random;
}

var numberPc = numberRandom(1, 5); // Function Call
console.log('Il numero randomico calcolato per il pc è: ' + numberPc);

var somma = number + numberPc;
console.log('La somma dei due numeri è: ' + somma);

if ((somma % 2 === 0) && (evenAndOdd === 'pari')) {
  alert('Il risultato è: pari. Hai vinto');
} else {
  alert(' Hai perso');
}
