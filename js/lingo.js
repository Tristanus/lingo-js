var firstLetter;

function getWord(){
	var randomNumber = (Math.floor(Math.random() * words.length));
	var randomWord = words[randomNumber];
	console.log(randomWord);
	firstLetter = randomWord.substring(0, 1);
	console.log(firstLetter);
}

getWord();