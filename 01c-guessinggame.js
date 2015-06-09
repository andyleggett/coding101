var console = $('#console');

var tries = 3;
var upperLimit = 10;
var guess;
var i;

var mysteryNumber = Math.round(Math.random() * upperLimit);
var askUser = 'Try to guess the mystery number between 1 and ' + upperLimit;

for (i = 1; i <= tries; i += 1) {

    guess = prompt(askUser);

    var triesRemaining = tries - i;

    if (guess == mysteryNumber) {
        console.text('You guessed correctly with ' + triesRemaining + ' tries remaining');
    } else {
        console.text('Incorrect - you have ' + triesRemaining + ' tries remaining');
    }
}

console.text('Mystery number was ' + mysteryNumber);
