const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground, ball;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  
  var option={

    isStatic : true

  }

  var option2={

   restitution : 1

  }

  ground=Bodies.rectangle(400,390,800,10,option);
  ball=Bodies.circle(400,10,30,option2);

  World.add(world,ground);
  World.add(world,ball);

}

function draw() {
  background("red");  

  Engine.update(engine);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30);
  drawSprites();
}