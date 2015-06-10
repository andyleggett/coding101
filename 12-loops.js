var console = $('#console');

var counterLoop;
var counter = 0;

for (counterLoop = 0; counterLoop < 20; counterLoop += 1){
	counter += 1;
}


var calcLoop;
var results = [];

for (calcLoop = 0; calcLoop < 10; calcLoop += 1){
	results[calcLoop] = 2 * calcLoop + 1;
}


var reverseLoop;
var countDownText = 'Countdown ... ';

for (reverseLoop = 10; reverseLoop > 0; reverseLoop -= 1){
	countDownText = countdownText + reverseLoop + ' ';
}


for (loop3 = 10; loop3 < 50; loop3 += 5){

}



var loop4 = 0;
var loop5 = 10;

while (loop4 < 10){
	//do stuff
	loop4 += 1;
}

while (loop5 > 0){
	//do stuff
	loop5 -= 1;
}



do{
	//do stuff
	loop4 += 1;
} while (loop4 < 10);

do{
	//do stuff
	loop5 -= 1;
} while (loop5 > 0);


console.text('');