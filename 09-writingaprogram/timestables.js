var output = '';
var i;
var j;

for(i = 2; i <= 12; i += 1)
{
  for(j = 1; j <= 12; j +=1)
    {
      output = output + (j * i) + ' ';
    }
  
  console.log(output);

  output = '';
}