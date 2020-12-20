var bullet,wall;

var speed, weight;


function setup() {
  createCanvas(800,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet = createSprite(50,200,55,25);
  bullet.shapeColor="white";

  thickness=random(22,83);
  wall = createSprite(800,200,thickness,height/2); 
  wall.shapeColor=(80,80,80);
  
  //createSprite(400, 200, 50, 50);
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
return true
  }
  return false;
}

function draw() {
  background("purple"); 
  
  bullet.velocityX=speed;
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}