const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball,boxS1,boxS2,boxS3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(900,20);

	boxS1 = new Box();

	ball = new PaperBall();

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);

  boxS1.debug = true;

  ball.display();
  ground.display();
  boxS1.display();

  keyPressed();

  drawSprites();
  
  boxS1.debug = true;
 
}

function keyPressed() {
	if (keyWentDown(UP_ARROW)) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x: 50, y: -75})
	}
}

