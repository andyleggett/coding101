var console = $('#console');

var car = {
	speed: 0,
	fuel: 100,
	increaseSpeed: function(increase){
		this.speed += increase;
	},
	decreaseSpeed: function(decrease){
		this.speed -= decrease;

		if (this.speed < 0){
			this.speed = 0;
		}
	}
};



var Car = function(speed){
	this.speed = speed;
	this.fuel = 100;

	this.increaseSpeed = function(increase){
		this.speed += increase;
	};

	this.decreaseSpeed: function(decrease){
		this.speed -= decrease;

		if (this.speed < 0){
			this.speed = 0;
		}
	};
};

var car1 = new Car(400);
var car2 = new Car(200);

car1.increaseSpeed(50);
car2.decreaseSpeed(300);


console.text(car1.speed);
console.text(car2.speed);

//////////////////////////////////////////////

var name = 'Jane Smith';

var len = name.length;

var names = name.split(' ');

var upper = name.toUpperCase();

console.text(name);


var coins = ['1p','2p', '5p', '10p', '20p', '50p', '£1'];

var numberOfCoins = coins.length;

coins.push('£2');

var coinNames = 'The coins are ' + coins.join(',');

var is50pIncluded = (coins.indexOf('50p') >= 0);

console.text(numberOfCoins);


var randomNumber = Math.round(Math.random() * 10);

var max = Math.max(10,20,15);

console.text(randomNumber);


var now = new Date();

var year = now.getYear();

var newYear = new Date('2015-01-01T00:00:00');

var day = newYear.getDay();

console.text(day);

