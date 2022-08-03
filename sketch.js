var ball;
var ground;
var leftSide, rightSide;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 0.5
	}

	leftSide = new Ground(1100, 600, 20, 145);
	rightSide = new Ground(800, 600, 20, 145);


	//Create the Bodies Here.
	ball = Bodies.circle(200, 100, 20, ball_options);
	World.add(world, ball);
	ground = new Ground(600, 680, 1200, 15);

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);

	background(0);
	ground.display();
	leftSide.display();
	rightSide.display();
	ellipseMode(RADIUS)
	ellipse(ball.position.x, ball.position.y, 20, 20);
	drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:15});
	}

}



