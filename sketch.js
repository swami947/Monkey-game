var PLAY = 1
var END = 0
var gameState = PLAY
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime = 0;
var score = 0;

function preload(){

  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,500);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running); 
 monkey.scale = 0.1; 
 
 ground = createSprite(400,350,900,10);
 ground.velocityX = -4;
 ground.x = ground.width/2;
 console.log(ground.x) 
  
 bananaGroup = createGroup(); 
 obstacleGroup = createGroup(); 
  
}


function draw() {
  background("white")
  stroke("black")
  textSize(20)
  fill("black")
  text("Score: "+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50)
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
   }
  
   if(keyDown("space")&& monkey.y >= 190) {
        monkey.velocityY = -12;
    }
    
    monkey.velocityY = monkey.velocityY + 0.8   

 monkey.collide(ground);
  
banana();
Obstacles();  
  
 drawSprites(); 
}

function banana(){
   if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage) 
    banana.scale = 0.07;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    bananaGroup.add(banana); 
    
    
  }
}

function Obstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,310,10,40);
   obstacle.velocityX = -6 
   obstacle.addImage(obstaceImage)
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
   obstacleGroup.add(obstacle);
 }
}











