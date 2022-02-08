const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, base1, base2, base3, base4, base5, base6, base7, base8, base9, base10;
var engine,world;


function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

ball = new Ball(200, 200, 20);
base1 = new Ground(150,300,300,25);
base2 = new Ground(450,500,250,25);
base3 = new Ground(550,400,250,25);
base4 = new Ground(313,400,25,225);
base5 = new Ground(562.5,419,25,165);
base6 = new Ground(800,200,250,25);
base7 = new Ground(420,100,25,270);
base8 = new Ground(800,200,250,25);
base9 = new Ground(800,200,250,25);
base10 = new Ground(800,200,250,25);
}


function draw() {
  background(200);
  Engine.update(engine);

  ball.display();
  base1.display();
  base2.display();
  base3.display();
  base4.display();
  base5.display();
  base6.display();
  base7.display();
  base8.display();
  base9.display();
  base10.display();

/*
  if(keyIsDown(UP_ARROW)){
    move(0,-10);
    console.log("jump")
  }
  if(keyIsDown(LEFT_ARROW)){
    move(-10,0);
    console.log("left")
  }
  if(keyIsDown(RIGHT_ARROW)){
    move(10,0);
    console.log("right")
  }
  if(keyIsDown("space")){
    move(null,null);
    console.log("crashed")
  }*/
}

function move(moveX,moveY){
  Matter.Body.applyForce(ball.body, {x:0,y:0}, {x:moveX, y:moveY })
}