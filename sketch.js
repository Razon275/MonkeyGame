
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(50,350,20,50);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x);
  FoodGroup= new Group();
  obstacleGroup= new Group();
}


function draw() {
background("white")
  if (frameCount%100){
    survivaltime=survivaltime+1;
  }
  if (ground.x < 150){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground)
  
  stroke("black");
  textSize(20);
  fill("black");
  var survivaltime=0;
  survivaltime=Math.ceil(frameCount/frameRate()) 
  text("survivalTime:"+survivaltime,100,50)
  
  if (monkey.isTouching(obstacleGroup)){
    obstacleGroup.setVelocityXEach(0)
    FoodGroup.setVelocityXEach(0)
    ground.velocityX=0;
  }
  obstacleGroup.setLifetimeEach(-1);
  FoodGroup.setLifetimeEach(-1);
  
  banana();
  obstacles();
  drawSprites();
}


function banana(){
  
  if (frameCount % 80===0){
    var banana= createSprite(600,200)
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
    banana.lifetime=200;
    FoodGroup.add(banana);
    
  }
  
}
function obstacles(){
  if (frameCount % 300===0){
    var obstacle= createSprite (600,200);
    obstacle.y=325;
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    obstacle.scale=0.1;
   
    obstacleGroup.add(obstacle)
    
    
    
  }
  
  
  
}




