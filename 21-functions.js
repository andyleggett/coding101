var console = $('#console');

function add(a, b){
  return a + b;
}

console.text(add(1,2));

function sayHello(name){
  return 'Hello ' + name + ', Nice to see you!';
}

console.text(sayHello('Mary'));

function calculateMortgageInterest(amount, rate){
  var newAmount;
  
  newAmount = amount + (amount * rate);
  
  return newAmount;
}

console.text(calculateMortgageInterest(100000, 0.05));

function sayHelloToAllPlayers(playerlist){
  var i;
  var helloList = [];
  
  for(i = 0; i < playerlist.length; i += 1){
    helloList.push('Hello ' + playerList[i]);
  }
  
  return helloList;
}

console.text(sayHelloToAllPlayers(['Amanada', 'Barbara', 'Chloe', 'Daisy']));

///////////////////////////////////////////////

var lives = 3;
var score = 0;
var numberOfEnemies = 20;
var playing = true;
var enemies = [];
var player = {};

function loadAssets(){
  //load images, sounds and videos
}

function positionEnemies(enemycount){
  var i;

  for(i = 0; i < enemycount; i += 1){
    //draw enemy on screen at random position
  }
}

function positionPlayer(lives){
  var i;

  //draw player at bottom of screen

  for(i = 0; i < lives; i += 1){
    //draw lives on screen at top right
  }
}

function updateEnemies(){
  //move enemies into new positions
  //see if any were hit by missles
  //if hit show explosion and remove destroyed enemies and update player score
  //if not hit increase speed
}

function updateEnemies(){
  //move player based on keyboard input
  //see if player was hit by bomb
  //if hit show explosion and remove a life
  //if not hit continue
}

function startGame(){

  loadAssets();

  positionEnemies(numberOfEnemies);

  positionPlayer(lives);

  while (playing === true){
     updateEnemies();
     updatePlayer();
  }
}

startGame();