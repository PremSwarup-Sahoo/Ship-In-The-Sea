var ship_animation
var sea_image

function preload(){

  sea_image = loadImage('sea.png');
  ship_animation = loadAnimation('ship-1.png','ship-2.png','ship-3.png','ship-4.png');

}

function setup(){
  
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(sea_image)
  sea.scale = 0.2
  sea.velocityX = -2

  ship = createSprite(170,200)
  ship.addAnimation('ship',ship_animation)
  ship.scale = 0.3

}

function draw() {
  background("lightblue");

  if (sea.x<0){
    sea.x = sea.width/30
  }

  drawSprites()
}