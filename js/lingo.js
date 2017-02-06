function getWord(){
	var randomNumber = (Math.floor(Math.random() * words.length));
	var randomWord = words[randomNumber];
	console.log(randomWord);
}

getWord();