var console = $('#console');

///////////////////////////////////////////////////////////

var age = 16;
var credits = 10;
var temperatue = 30;

///////////////////////////////////////////////////////////

if (age < 17){
	console.text('You can\'t drive a car');
}

///////////////////////////////////////////////////////////

if (age >= 18){
	console.text('You can get the next round');
}

///////////////////////////////////////////////////////////

if (credits === 0){
	console.text('You need to buy more credits!');
}

///////////////////////////////////////////////////////////

if (credits > 100){
	console.text('You can\'t buy anymore credits! Why not spend some.');
} else {
	console.text('You can buy ' + (100 - credits) + ' credits');
}

///////////////////////////////////////////////////////////

if (height < 1.50 || height > 2.20){
	console.text('You need to be between 1.5m and 2.2m to use this ride.');
} else {
	console.text('You can use this ride - enjoy!');
}

///////////////////////////////////////////////////////////

if (age >= 21){
	console.text('You can drink in America.');
} else if (age >= 18){
	console.text('You can drink in Britian.');
} else {
	console.text('You can\'t drink.');
}

///////////////////////////////////////////////////////////

if (temperature >= 25 && temperature <= 35){
	console.text('Baby bear\'s porridge - just right');
} else if (temperature < 25){
	console.text('Mummy bear\'s porridge - too cold');
} else if (temperature > 35){
	console.text('Daddy bear\'s porridge - too hot');
}

///////////////////////////////////////////////////////////
