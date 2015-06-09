$(function() {

    var console = $('#console');

    ////////////////////////////////////

    var aNumber = 10;

    var added = aNumber + 20;
    var subtracted = aNumber - 5;
    var multiplied = aNumber * 100;
    var divided = aNumber / 10;

    var aString = 'This is a string';
    var bString = 'added to another';

    var concatenated = aString + bString;

    var aBoolean = true;
    var bBoolean = false;

    var anded = aBoolean && bBoolean;
    var ored = aBoolean || bBoolean;

    ///////////////////////////////////

    console.text(aNumber);
});