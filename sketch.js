var mr, fr;
var car;
var wall;

function setup() {
  createCanvas(800,400);
  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "yellow";
  mr.velocityX = -3;
  
  fr = createSprite(200, 200, 90, 50);
  fr.shapeColor = "yellow";
  fr.velocityX = 3;

  car = createSprite(100, 350, 30, 50);
  car.shapeColor = "purple";
  car.velocityY = -2;

  wall = createSprite(100, 100, 50, 70);
  wall.shapeColor = "green";
}

function draw() {
  background("blue");  
  
  bounceOff(car, wall);

  bounceOff(mr, fr);

  drawSprites();
  //mr.x = mouseX;
  //mr.y = mouseY;
  /*else {
  mr.shapeColor = "yellow";
  fr.shapeColor = "yellow";
  }*/
}

