const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, polygon, slingshot;

var gameState = "onSling";

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    //level one
    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);
    block5 = new Block(450,235,30,40);
    //level two
    block6 = new Block(360,195,30,40);
    block7 = new Block(390,195,30,40);
    block8 = new Block(420,195,30,40);
    //top
    block9 = new Block(390,155,30,40);

    polygon = new Polygon(200,50);
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
    strokeWeight(4);
    ground.display();

    polygon.display();
    block1.display();
    block2.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}