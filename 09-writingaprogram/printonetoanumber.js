var upperBound = 20;
var i;
var output = '';

for (i = 1; i <= upperBound; i += 1){
	output += i;
	if (i < upperBound){
		output += ', ';
	}
}

console.log(output);