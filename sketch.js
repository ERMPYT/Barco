
function preload(){
var sea = createSprite(100,100,100,100)
var seaimg = createSprite(200,200,200,200)
}
if(sea.x <0) {
  sea.x=sea.width/2
}

function setup(){
  createCanvas(400,400);
  seaimg = loadImage("sea.png")
  shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
}

function draw() {
  background("blue");
 
}