/* 
Descrizione:
Un alert espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Bonus:
Introdurre la parte di grafica oltre a quella di logica :occhiolino:
*/

var countdown = 3000; //Il tempo a disposizione del giocatore IN MILLISECONDI
var numbersAmount = 5; //La quantita' di numeri generati
var highestNumber = 100;
const generatedNumbers = [];
const userNumbers = [];
const correctGuesses = [];

// Mi assicuro di evitare che i valori inseriti causino un loop infinito
while (highestNumber <= numbersAmount) {
	alert('Assicurati di aver inserito dei valori corretti!');
}
pushGeneratedNumbersToArray(generatedNumbers);
setTimeout(function () {
	for (let i = 0; i < generatedNumbers.length; i++) {
		do {
			var guess = parseInt(prompt(`Quali numeri ti erano stati proposti?`));
		} while (guess < 1 || guess > highestNumber || isNaN(guess) || isInArray(guess, userNumbers) == true);
		userNumbers.push(guess);
		if (isInArray(guess, generatedNumbers) == true) {
			correctGuesses.push(guess);
		}
	}

	if (correctGuesses.length == numbersAmount) {
		console.log('Ti sei ricordato tutti i numeri!');
	} else if (correctGuesses.length == 0) {
		console.log('Non ti sei ricordato nessun numero!');
	} else if (correctGuesses.length == 1) {
		console.log('Ti sei ricordato ' + correctGuesses.length + ' numero!');
		console.log('Il numero indovinato correttamente: ' + correctGuesses);
	} else {
		console.log('Ti sei ricordato ' + correctGuesses.length + ' numeri!');
		console.log('I numeri indovinati correttamente: ' + correctGuesses);
	}
}, countdown);

// Funzione per generare i numeri che l'utente dovra' ricordare
function getRandomNumber(n) {
	return Math.floor(Math.random() * n + 1);
}

// Funzione per pushare i numeri generati con la funzione getRandomNumber() all'interno di un array, evitando numeri doppi.
function pushGeneratedNumbersToArray(array) {
	for (let i = 0; i < numbersAmount; i++) {
		element = getRandomNumber(highestNumber);

		while (array.includes(element)) {
			element = getRandomNumber(highestNumber);
		}
		array.push(element);
	}
	console.log(array);
}

//Funzione per controllare se un elemento e' all'interno di un array
function isInArray(element, array) {
	return !!array.includes(element);
}
