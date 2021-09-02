var canvas, backgroundImage;
var players = []
var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var obstacle, obstaclesG;
var form, player, game;
var ob1,ob2,ob3,ob4,ob5
var player1,player2,bike_sound
var track, ob1_img, ob2_img, ob3_img, ob4_img;

function preload(){
  bg_image = loadImage("images/road.jpg");
  ob1_img = loadImage("images/ob2.png");
  ob2_img = loadImage("images/ob3.png");
  ob3_img = loadImage("images/ob4.png");
  ob4_img = loadImage("images/ob5.png");
  ob5_img = loadImage("images/ob6.png");
  player1_img = loadImage("images/player1.png")
  player2_img = loadImage("images/player2.png")
 bike_sound = loadSound("sound/bikeSound.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();


  obstaclesG = new Group()


for(var i=0; i<20 ;i++){

w = random(200,displayWidth-200)
h = random(-displayHeight*10, -displayHeight*3)

obstacle = createSprite(w,h,20,20)
obstacle.scale = 0.5
obstacle.velocityY = Math.round(random(2,5))
var num = Math.round(random(1,5))

switch(num){

case 1: obstacle.addImage(ob1_img)
obstacle.scale = 0.3
break;
case 2: obstacle.addImage(ob2_img)
  break;
case 3: obstacle.addImage(ob3_img)
  break;
case 4: obstacle.addImage(ob4_img)
break;
case 5: obstacle.addImage(ob5_img)
obstacle.scale = 0.3
break;


}

obstaclesG.add(obstacle)

}
}



function draw(){
   //start the game
   //background(bg_image);

   //start the game
   if (playerCount === 2 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
    game.update(2)
    // console.log("End");
     clear()
    
     game.end()
   }
  //if(allPlayers.[plr].distance=) {






  
  
  
  
  
  
  }
 
  