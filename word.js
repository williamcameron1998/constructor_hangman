var letter = require(./letter);

var word = function(answer)
this.word = answer;
this.lettersGuessed = [];
this.wordCorrect = false;

this.letters = function() {
	for(var i=0; i<word.length; i++){
		var newLetter = new letter(this.letters[i]);
		this.letterspush(newLetter);

	}
};
this.checkWord = function() {
	if(this.letters.every(function(guess){
		return letter.appear === true;
	})){
		this.wordCorrect = true;
		return true;
	}
};

this.checkLetter = function(guess) {
	var returned = 0;
	this.letters.forEach(function(getLetter){
		if(guess.letter === getLetter){
			getLetter.appear = true;
			returned++;
		}
	})
	return returned;
};

this.wordVisible = function() {
	var display = '';
	this.letters.forEach(function(getLetter){
		var currentLetter = getLetter.letterRender();
		display+= currentLetter;
	});
	return display;
};
module.exports = word;