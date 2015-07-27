// 1  2  FIZZ 4 BUZZ FIZZ 7 8 FIZZ BUZZ 11 FIZZ 13 14 FIZZBUZZ

var goUpTo = 15;

var output = '';
var i;

for (i = 1; i <= goUpTo; i += 1)  // go from 1 to 100
{
  if (i % 3 === 0 && i % 5 === 0) //check to see if in 3 and 5 times tables
  {
     output = output + ' FIZZBUZZ ';
  }
  else if (i % 3 === 0) //check if in 3 times tables
  {
  	output = output + ' FIZZ ';
  }
  else if (i % 5 === 0) //check if in 5 times table
  {
    output = output + ' BUZZ ';
  }
  else //catch all
  {
      output = output + ' ' + i + ' ';
  }
}

console.log(output);