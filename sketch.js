const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1, box2, box3;
var paperObject;
var ground;
var dustbin, bin;  

function preload(){ 
	bin = loadImage("dustbin.png"); 
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20);

	//box1 = new Dustbin(700,height - 35,150,20);
	//box2 = new Dustbin(620,height - 75,20,100);
	//box3 = new Dustbin(780,height - 75,20,100);

	paperObject = new Paper(200,100, 40);
 
}


function draw() {
	rectMode(CENTER);
	background("white");

	Engine.update(engine);

	ground.display();

	//box1.display();
	//box2.display();
	//box3.display();
	
	paperObject.display();
	imageMode(CENTER);
	image(bin, 600, 500); 
}


function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:160,y:-400});
	}
}



