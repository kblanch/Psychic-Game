var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var index = getRandomIndex(alphabet.length);
var letter = alphabet[index];
var guessesLeft = 9;
var guessList = [];
var gamesWon = 0;
var gamesLost = 0;

document.addEventListener("DOMContentLoaded", function(event) {
	//var ltr = document.getElementById("letter"); 
	//ltr.textContent = letter;
	var wns = document.getElementById("wins"); 
	wns.textContent = gamesWon;
	var los = document.getElementById("losses"); 
	los.textContent = gamesLost;
	var guessesLft = document.getElementById("guesses-left"); 
	guessesLft.textContent = guessesLeft;

});

document.onkeypress = function(e){
	var userInput = e.key;

	if(isAlpha(userInput) && newGuess(userInput)){//Is user input an alpha character and has it been guessed?
		if(userInput === letter){//Game Won
			gamesWon++;
			alert("You guessed the correct letter: " + letter);
			newGame();
		}
		else if(guessesLeft === 1){//Game Lost
			gamesLost++;
			alert("The correct letter was: " + letter);
			newGame();
		}
		else {//Continue Game
		guessesLeft--;
		guessList.push(userInput);
		guessesLft = document.getElementById("guesses-left"); 
		guessesLft.textContent = guessesLeft;
		lst = document.getElementById("guess-list"); 
		lst.textContent = guessList;
		}

	}
}

function getRandomIndex(x){
 	return Math.floor(Math.random() * x);
}

function newGame(){
	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	index = getRandomIndex(alphabet.length);
	letter = alphabet[index];
	guessesLeft = 9;
	guessList = [];

	//ltr = document.getElementById("letter"); 
	//ltr.textContent = letter;
	wns = document.getElementById("wins"); 
	wns.textContent = gamesWon;
	los = document.getElementById("losses"); 
	los.textContent = gamesLost;
	guessesLft = document.getElementById("guesses-left"); 
	guessesLft.textContent = guessesLeft;
	lst = document.getElementById("guess-list"); 
	lst.textContent = guessList;
}

function isAlpha(l){
	var alpha = false;
	for (var i = 0; i < alphabet.length; i++) {
		if(l === alphabet[i]){
			alpha = true;
			i = alphabet.length;
		}
	}
	return alpha;
}

 function newGuess(l){
 	var newInput = true;
 	for (var i = 0; i < guessList.length; i++){
 		if(l === guessList[i]){
			newInput = false;
			i = guessList.length
 		}
 	}
 	return newInput;
}