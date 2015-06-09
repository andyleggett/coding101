var console = $('#console');

var loop1;
var loop2;
var loop3;


for (loop1 = 0; loop1 < 20; loop1 += 1){
	//do stuff with loop1 = 0
	//do stuff with loop1 = 1
	//do stuff with loop1 = 2
	//...
	//do stuff with loop1 = 18
	//do stuff with loop1 = 19
}


for (loop2 = 100; loop2 > 0; loop2 -= 1){
	//do stuff with loop1 = 100
	//do stuff with loop1 = 99
	//do stuff with loop1 = 98
	//...
	//do stuff with loop1 = 2
	//do stuff with loop1 = 1
}


for (loop3 = 10; loop3 < 50; loop3 += 5){
	//do stuff with loop1 = 10
	//do stuff with loop1 = 15
	//do stuff with loop1 = 20
	//...
	//do stuff with loop1 = 40
	//do stuff with loop1 = 45
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