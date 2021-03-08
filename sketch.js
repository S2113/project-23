var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxLeftBody,boxRightBody,boxBottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var engine;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4,isStatic:true});
	
	World.add(world, packageBody);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	


	

	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 50, 10 , {isStatic:true} );
 	World.add(world, ground);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	

 	//boxleftSprite=createSprite(boxPosition, boxY, 20,100);
//boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody=new boxy(248,580,125,0);
	boxBottomBody=new boxy(335,650,200,90);
	boxRightBody=new boxy(422,580,125,0);
	//boxBottomBody=new boxy(boxPosition+100, boxY+45-20, 200,20);
	//boxRightBody=new boxy(boxPosition+200-20 , boxY, 20,100);

 	//boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	//boxBase.shapeColor=color(255,0,0);

 

 	//boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	//boxleftSprite.shapeColor=color(255,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  packageBody.position.x=helicopterSprite.x;
  //packageBody.position.y=helicopterSprite.y;

//boxPosition,boxY,20,200
//boxPosition+100,boxY+40,200,20
//boxPosition+200,boxY,20,100


  
boxLeftBody.display();
boxRightBody.display();
boxBottomBody.display();

  
  drawSprites();
  
  mousePressed();
 
}

function mousePressed()
{
	if(keyDown("RIGHT_ARROW"))
	{
      helicopterSprite.x=helicopterSprite.x+2;
	}

	if(keyDown("LEFT_ARROW"))
	{
      helicopterSprite.x=helicopterSprite.x-2;
	}

	if(keyDown("DOWN_ARROW"))
	{
      Matter.Body.translate(packageBody,{x:0,y:20});
	}
	
}
