var console = $('#console');

//Number maths operators
var aNumber = 10;

var added = aNumber + 20;
var subtracted = aNumber - 5;
var multiplied = aNumber * 100;
var divided = aNumber / 10;

var bNumber = 50;

var twoAdded = aNumber + bNumber;

aNumber = aNumber + 10;
aNumber = aNumber * bNumber;

//short-hand assignments
aNumber += 10;
aNumber *= bNumber;

//Number comparison operators
var lessThan = aNumber < bNumber;
var greaterThan = aNumber > bNumber;

// >= <= === !==

//String operator
var aString = 'This is a string';
var bString = 'added to another';

var concatenated = aString + bString;

//Boolean operators
var aBoolean = true;
var bBoolean = false;

var anded = aBoolean && bBoolean;
var ored = aBoolean || bBoolean;
var noted = !aBoolean;

console.text(aNumber);