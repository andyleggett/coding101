var console = $('#console');

//Number maths operators
var aNumber = 10;

var added = aNumber + 20;
var subtracted = aNumber - 5;
var multiplied = aNumber * 100;
var divided = aNumber / 10;
var twoCalcs = aNumber * 5 - 4;

console.text(added);

///////////////////////////////////////////////////////////

var bNumber = 50;

var twoAdded = aNumber + bNumber;

aNumber = aNumber + 10;
aNumber = aNumber * bNumber;

console.text(aNumber);

///////////////////////////////////////////////////////////

//short-hand assignments
aNumber += 10;
aNumber *= bNumber;

console.text(aNumber);

///////////////////////////////////////////////////////////

//Number comparison operators
var lessThan = aNumber < bNumber;
var greaterThan = aNumber > bNumber;

console.text(lessThan);

// >= <= === !==

///////////////////////////////////////////////////////////

//String operator
var aString = 'This is a string';
var bString = 'added to another';

var concatenated = aString + bString;

console.text(concatenated);

///////////////////////////////////////////////////////////

//Boolean operators
var aBoolean = true;
var bBoolean = false;

var anded = aBoolean && bBoolean;
var ored = aBoolean || bBoolean;
var noted = !aBoolean;

console.text(aNumber);