var console = $('#console');

var tries = 3;
var upperLimit = 10;
var guess;
var guesses = 0;
var triesRemaining;

var mysteryNumber = Math.round(Math.random() * upperLimit);
var askUser = 'Try to guess the mystery number between 1 and ' + upperLimit;

do {
    guess = prompt(askUser);

    guesses += 1;

    triesRemaining = tries - guesses;

    if (guess == mysteryNumber) {
        console.text('You guessed the mystery number ' + mysteryNumber + ' correctly with ' + triesRemaining + ' tries remaining');
    } else {
        console.text('Incorrect - you have ' + triesRemaining + ' tries remaining');
    }

} while (guess != mysteryNumber && triesRemaining > 0)