
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	dustbinObj = new dustbin(880,370); //adjust accordingly

	paperObject = new paper(100,370,70);
	groundObject=new ground(width/2,380,width,20);

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(180);
 
  
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:150,y:-180}); 
		// force need to be adjusted depending on the ball
    
  	}
}





