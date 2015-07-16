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

console.text(sayHelloToAllPlayers(['Amanada', 'Barbara', 'Chloe', 'Daisy']);
