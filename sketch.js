//Ma'am if you want to see all the three colors you will need to press refresh ALOT of times. It works tho :)
var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(800,400);

  speed = random (20,140);
  weight = random (400,1500);

  car = createSprite(50, 200, 30, 30);
  car.shapeColor = "Cyan"
  car.velocityX = speed;

  wall = createSprite(720,200,60,200);
  wall.shapeColor = "Cyan"
  
  var deformation = 0;
}

function draw() {
  background("black");

  if (car.x - wall.x > (car.width + wall.width)/3){
    car.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/22500

    if(deformation < 80 ){
      car.shapeColor = ("green")
    }
    if(deformation > 80 && deformation < 180){
      car.shapeColor = ("yellow")
    }
    if(deformation > 180){
      car.shapeColor = ("red")
    }
  }

  drawSprites();
}