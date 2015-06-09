var console = $('#console');

var numberOfItems = 10;

var sequenceArray = [];

for (var i = 0; i < numberOfItems; i += 1) {
    if (i === 0) {
        sequenceArray[i] = 1;
    } else if (i === 1) {
        sequenceArray[i] = 1;
    } else {
        sequenceArray[i] = sequenceArray[i - 2] + sequenceArray[i - 1];
    }
}

console.text(sequenceArray);