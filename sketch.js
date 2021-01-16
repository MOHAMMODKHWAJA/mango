
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(600,height,1200,20);
boy1= new boy(200,200);
boy1.scale=1.8;
tree1= new tree(950,600,600,600);



mango1= new mango(950,500,50,50);
mango2= new mango(950,500,50,50);
mango3= new mango(950,500,50,50);
mango4= new mango(950,500,50,50);
mango5= new mango(950,500,50,50);
mango6= new mango(950,500,50,50);
//mango7= new mango(950,500,50,50,(options));
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  ground1.display();
  boy1.display();
  tree1.display();
  mango1.display();
  mango2.display()
  mango3.display();
  mango4.display();
mango5.display();
mango6.display();
  drawSprites();
 
}



 function detectcollision(){
mangoBodyPosition=lmango.body.bodyPosition
stoneBodyPosition=lstone.body.body.Position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
Matter.Body.setStatic(lmango.body,false);
}
 }

