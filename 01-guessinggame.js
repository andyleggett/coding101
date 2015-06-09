$(function() {

    var console = $('#console');

    ////////////////////////////////////

    var tries = 3;
    var upperLimit = 10;
    var guess;

    var mysteryNumber = Math.round(Math.random() * upperlimit);
    var askUser = 'Try to guess the mystery number between 1 and ' + upperLimit;

    for (var i = 1; i <= tries; i += 1){

        guess = window.prompt(askUser);

        if (guess == mysteryNumber){
          window.alert('You guessed correctly with ' + (tries - i) + ' tries remianing');
          break;
        } else {
          window.alert('Incorrect - you have ' + (tries - i) + ' tries remianing');
        }
        
    }

    ///////////////////////////////////

    console.text('');
});