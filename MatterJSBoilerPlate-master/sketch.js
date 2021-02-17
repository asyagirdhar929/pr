var startButton;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var startButton,art,img;

function preload()
{
img=loadImage("bg.jpeg")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	startButton=createButton("Start The Game!!!!");
	startButton.position(350,450);

var art=createSprite(400,350,20,20);
art.addImage(img);

	Engine.run(engine);
  
}


function draw() {

  background("pink");
  drawSprites();
  
 
}



