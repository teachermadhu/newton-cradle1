
var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1000, 600);
	engine = Engine.create();
	world = engine.world;

	roof=new Roof(500,100,500,40);

	bobObject1=new Bob(300,300,100)
	bobObject2=new Bob(400,300,100)
	bobObject3=new Bob(500,300,100)
	bobObject4=new Bob(600,300,100)
	bobObject5=new Bob(700,300,100)

	rope1=new Rope(bobObject1.body,roof.body,-200,0)
	rope2=new Rope(bobObject2.body,roof.body,-100,0)
	rope3=new Rope(bobObject3.body,roof.body,0,0)
	rope4=new Rope(bobObject4.body,roof.body,100,0)
	rope5=new Rope(bobObject5.body,roof.body,200,0)


	Engine.run(engine);
  
}


function draw() {
  background(180);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-60});
	}
}



