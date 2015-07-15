var console = $('#console');

//Given a number, prints out all the numbers from 1 to that number with commas between.

var upperBound = 20;
var i;
var output = '';

for (i = 1; i <= upperBound; i += 1){
	output += i;
	if (i < upperBound){
		output += ', ';
	}
}

console.text(output);



//Find the largest number in an array.

var input = [3,4,1,2,5,6,7,4,3,3,2,2];
var i;
var largestNumber = 0;

for (i = 0; i < 12; i += 1){
	if (input[i] > largestNumber){
		largestNumber = input[i];
	}
}

console.text(largestNumber);