
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1
var bob2
var bob3
var bob4
var bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	keyPressed();

	engine = Engine.create();
	world = engine.world;

	bob1 = new paper(200,250,100);
	World.add(world, bob1)
	bob2 = new paper(300,250,100);
	World.add(world, bob2)
	bob3 = new paper(400,250,100);
	World.add(world, bob3)
	bob4 = new paper(500,250,100);
	World.add(world, bob4)
	bob5 = new paper(600,250,100);
	World.add(world, bob5)

	
	

	floor = new ground(400,25,500,40)
	World.add(world, floor);
	floor1 = new ground(200,25,100,40)
	World.add(world, floor1);
	floor2 = new ground(300,25,100,40)
	World.add(world, floor2);
	floor3 = new ground(400,25,100,40)
	World.add(world, floor3);
	floor4 = new ground(500,25,100,40)
	World.add(world, floor4);
	floor5 = new ground(600,25,100,40)
	World.add(world, floor5);


	
	rope1 = new rope(bob1.body,floor1.body)
	World.add(world, rope1);

	rope5 = new rope(bob5.body,floor5.body)
	World.add(world, rope5);

	rope4 = new rope(bob4.body,floor4.body)
	World.add(world, rope4);

	rope3 = new rope(bob3.body,floor3.body)
	World.add(world, rope3);

	rope2 = new rope(bob2.body,floor2.body)
	World.add(world, rope2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  floor1.display();
  floor2.display();
  floor3.display();
  floor4.display();
  floor5.display();
  floor.display();
  
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.position,{x:50, y:-50});
		
	}
}


