var guesses = 5;

function getWord(){
	var randomNumber = (Math.floor(Math.random() * words.length));
	var randomWord = words[randomNumber];
	return randomWord;
}

var currentRow = 1;
var row = 1;
var letterAnswer = getWord().split();

function check(){
	var currentLetter = 1;
	var word = document.getElementById('wordGuess').value;
	var letterInput = word.split("");
	for(i = 0; i < 4; i++){
		document.getElementById(currentRow + "." + currentLetter).innerHTML = letterInput[i];
		if(letterInput)
	}
}

