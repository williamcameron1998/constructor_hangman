var inquirer = require("inquirer");
var word = require("word");
var isLetter = require('is-letter');
var fs = require("fs")
var userCorrect = false;
var wordList = ["javascript", "coding", "bootcamp", "computer", "server"]

var correctWord;
var words;
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var playerLetter = "";
var lettersGuessed = "";
var guessedArray = [];
var filled = 0;

var tutorial =
	 "==========================================================================================================" + "\r\n" +
    "How to play" + "\r\n" +
"==========================================================================================================" + "\r\n" + "When ready choose a letter on the keyboard." + "/r/n" + "After you press a key your guess will be recorded as correct or incorrect, you have five guesses" + "\r\n" + "==========================================================================================================";
ready();

function ready() {
	var readyToPlay = [
		{
			type: 'confirm',
			name: 'readyToPlay',
			message: 'Are you ready?',
			default: true
		}
	];
}


	
