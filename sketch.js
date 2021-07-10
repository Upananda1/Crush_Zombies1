const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;


 ground = new Base(0,height-10, width*2, 20);
 base = new Base(300, height/2+50, 600, 100);
 base2 = new Base(width-300, height/2+50, 600, 100);
 jointPoint = new Base(width-600, height/2+10, 40, 20);
 bridge = new Bridge(15, {x: width/2-300, y: height/2})

 Matter.Composite.add(bridge.body, jointPoint);
 jointLink = new Link(bridge, jointPoint);

 for(var i = 0; i<=8; i++){
   var x = random(width/2 - 200, width/2+300)
   var y = random(-10, 140);
   var stone = new Stone(x, y, 80, 80)
   stones.push(stone);
 }

  frameRate(80);

}

function draw() {
  background(51);
 Engine.update(engine)

 ground.display();
 base.display();
 base2.display();
 

 bridge.show();

 for(var stone of stones){
   stone.show();
 }

}
