function add(a, b){
  return a + b;
}

var add1and2 = add(1,2);

console.log(add1and2);

/*
function sayHello(name){
  return 'Hello ' + name + ', nice to see you!';
}

var sayHelloToMary = sayHello('Mary');

console.log(sayHelloToMary);
*/

/*
function calculateMortgageInterest(amount, rate){
  var newAmount;
  
  newAmount = amount + (amount * rate);
  
  return newAmount;
}

console.log(calculateMortgageInterest(100000, 0.05));
*/

/*
function sayHelloToAllPlayers(playerlist){
  var i;
  var helloList = [];
  
  for(i = 0; i < playerlist.length; i += 1){
    helloList = helloList + ' Hello ' + playerlist[i] + '! ';
  }
  
  return helloList;
}

console.log(sayHelloToAllPlayers(['Amanada', 'Barbara', 'Chloe', 'Daisy']));
*/


/*
var lives = 3;
var score = 0;
var numberOfEnemies = 20;
var enemies = [];
var player = {};
var counter = 0;

function loadAssets() {
    //load images, sounds and videos
    console.log('loading assets... please wait');
}

function positionEnemies(enemycount) {
    var i;

    for (i = 0; i < enemycount; i += 1) {
        //draw enemy on screen at random position
        console.log('drawing enemy number ' + i);
    }
}

function positionPlayer(lives) {
    var i;

    //draw player at bottom of screen
    console.log('drawing player');

    for (i = 0; i < lives; i += 1) {
        console.log('drawing life ' + i);
    }
}

function updateEnemies() {
    console.log('update enemies');
    //move enemies into new positions
    //see if any were hit by missles
    //if hit show explosion and remove destroyed enemies and update player score
    //if not hit increase speed
}

function updatePlayer() {
    console.log('update player');
    //move player based on keyboard input
    //see if player was hit by bomb
    //if hit show explosion and remove a life
    //if not hit continue
}

function startGame() {
    loadAssets();

    positionEnemies(numberOfEnemies);

    positionPlayer(lives);

    while (counter < 100) {
        updateEnemies();
        updatePlayer();

        counter += 1;
    }
}

startGame();
*/