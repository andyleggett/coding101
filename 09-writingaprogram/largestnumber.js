var input = [3,4,1,2,5,6,7,4,3,3,2,2];
var i;
var largestNumber = 0;

for (i = 0; i < 12; i += 1){
	if (input[i] > largestNumber){
		largestNumber = input[i];
	}
}

console.log(input);
console.log(largestNumber);