
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;

function preload()
{
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	/*leftSprite=createSprite(1000,650,20,100);
	leftSprite.shapeColor="red";

	rightSprite=createSprite(1200,650,20,100);
	rightSprite.shapeColor="red";*/

	
	bottomSprite=createSprite(1100,600,200,20);
	//bottomSprite.shapeColor="red";
	bottomSprite.addImage(dustbinImage);
	bottomSprite.scale=0.5;


	groundSprite=createSprite(width/2, 690, width,20);
	groundSprite.shapeColor=color("brown")

    
	paper1 = new Paper(200,670,25);



	leftBody = Bodies.rectangle(1000,650,20,100,{isStatic:true});
	World.add(world,leftBody);

	rightBody = Bodies.rectangle(1200,650,20,100,{isStatic:true});
	World.add(world,rightBody);


    bottomBody = Bodies.rectangle(1100,670,20,200,{isStatic:true});
	World.add(world,bottomBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 690, width, 50 , {isStatic:true} );
	
	
 	World.add(world, ground);


	Engine.run(engine);
  



  
}


function draw() {
  rectMode(CENTER);
  background(230);

  paper1.display();

  
  drawSprites();
 
}


function keyPressed(){
    if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:32,y:-32})


	}

}



