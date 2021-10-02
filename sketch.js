
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

   var ball_options={
	   isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2
   }
   	//Create the Bodies Here.
	   ball = Bodies.circle(200,100,20, ball_options);
	   World.add(world,ball);
	   
	   ground = new Ground(670,670,100,20);
	  


	ellipseMode(RADIUS);
	rectMode(CENTER);
	Engine.run(engine);
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  ground.show();
  
 

  
  drawSprites();
 
}



