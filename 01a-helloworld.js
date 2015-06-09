var console = $('#console');

var output = '';
var loop;

for (loop = 1; loop <= 10; loop += 1) {
    output = output + 'Hello World! ';
}

console.text(output);