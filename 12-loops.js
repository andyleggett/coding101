var console = $('#console');

///////////////////////////////////////////////////////////

var counterLoop;
var counter = 0;

for (counterLoop = 0; counterLoop < 20; counterLoop += 1){
	counter += 1;
}

console.text(counter);

///////////////////////////////////////////////////////////

//var calcLoop;
//var results = [];

//for (calcLoop = 0; calcLoop < 10; calcLoop += 1){
//	results[calcLoop] = 2 * calcLoop + 1;
//}

//console.text(results);

///////////////////////////////////////////////////////////

//var tablesLoop;
//var tablesText = 'Multiples of 5 are ... ';

//for (tablesLoop = 5; tablesLoop <= 50; tablesLoop += 5){
//	tablesText = tablesText + tablesLoop + ' ';
//}

//console.text(tablesText);

///////////////////////////////////////////////////////////

//var reverseLoop;
//var countDownText = 'Countdown ... ';

//for (reverseLoop = 10; reverseLoop > 0; reverseLoop -= 1){
//	countDownText = countdownText + reverseLoop + ' ';
//}

//console.text(countDownText);

///////////////////////////////////////////////////////////

calcLoop = 0;
results = [];

while (calcLoop < 10){
	results[calcLoop] = 2 * calcLoop + 1;
	calcLoop += 1;
}

console.text(results);

///////////////////////////////////////////////////////////

calcLoop = 0;
results = [];

do{
	results[calcLoop] = 2 * calcLoop + 1;
	calcLoop += 1;
} while (calcLoop < 10);

console.text(results);

///////////////////////////////////////////////////////////