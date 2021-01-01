var database;

var game,player,form

var gameState = 0
var playerCount
var allPlayers = []

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game()
game.getState()
game.start()


}

function draw(){
  background("white");
  if(playerCount === 4){
game.updae(1)

  }
 if(gameState === 1){
clear()
game.play()
 }
  
}

