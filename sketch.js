let ground;
let lander;
var lander_img;
var bg_img;
var pose1,pose2,pose3;

var vx = 0;
var g = 0.05;
var vy = 0;


function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(30);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  pose1 = createSprite(110,450,30,30);
  pose1.shapeColor = "red";

  pose2 = createSprite(500,450,30,30);
  pose2.shapeColor = "red";

  pose3 = createSprite(850,450,30,30);
  pose3.shapeColor = "red";


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();
  

  if (keyDown("left")) {
    lander.velocityX=-4;
    lander.velocityY=0;
    
  }

  if (keyDown("right")) {
    lander.velocityX=+4;
    lander.velocityY=0;
  
    
  }

  if(lander.isTouching(pose1)||lander.isTouching(pose2)||lander.isTouching(pose3)){
    lander.x= 500;
    lander.y= 50;
    text("you lose",200,180,);
    Canvas.Visibility = 0;
  }
   
  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();
}


