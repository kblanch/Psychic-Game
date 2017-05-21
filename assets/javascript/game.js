var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var index = getRandomInt(alphabet.length);
var letter = alphabet[index];
var guessesLeft = 9;
var gamesWon = 0;
var gamesLost = 0;
var guessList = [];
var gameWon = false;

function getRandomInt(x) {
 	return Math.floor(Math.random() * x);
}

document.addEventListener("DOMContentLoaded", function(event) {
	var ltr = document.getElementById("letter"); 
	ltr.textContent = letter;
	var wns = document.getElementById("wins"); 
	wns.textContent = gamesWon;
	var los = document.getElementById("losses"); 
	los.textContent = gamesLost;
	var guessesLft = document.getElementById("guesses-left"); 
	guessesLft.textContent = guessesLeft;

});

document.onkeypress = function(e){
	var userInput = e.key;

	//if(){
		if(userInput === letter){//Game Won
			//gameWon = true;
			gamesWon++;
			console.log(gamesWon);
			alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			index = getRandomInt(alphabet.length);
			letter = alphabet[index];
			guessesLeft = 9;
			guessList = [];
			gameWon = false;
			ltr = document.getElementById("letter"); 
			ltr.textContent = letter;
			wns = document.getElementById("wins"); 
			wns.textContent = gamesWon;
			los = document.getElementById("losses"); 
			los.textContent = gamesLost;
			guessesLft = document.getElementById("guesses-left"); 
			guessesLft.textContent = guessesLeft;
			lst = document.getElementById("guess-list"); 
			lst.textContent = guessList;
		}
		else if(guessesLeft === 1){//Game Lost
			//gameWon stays = false
			gamesLost++;
			alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			index = getRandomInt(alphabet.length);
			letter = alphabet[index];
			guessesLeft = 9;
			guessList = [];
			gameWon = false;
			ltr = document.getElementById("letter"); 
			ltr.textContent = letter;
			wns = document.getElementById("wins"); 
			wns.textContent = gamesWon;
			los = document.getElementById("losses"); 
			los.textContent = gamesLost;
			guessesLft = document.getElementById("guesses-left"); 
			guessesLft.textContent = guessesLeft;
			lst = document.getElementById("guess-list"); 
			lst.textContent = guessList;
		}
		else {//Continue Game
		guessesLeft--;
		guessesLft = document.getElementById("guesses-left"); 
		guessesLft.textContent = guessesLeft;
		guessList.push(userInput);
		lst = document.getElementById("guess-list"); 
		lst.textContent = guessList;
		}

	//}
}