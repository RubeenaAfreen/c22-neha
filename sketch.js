const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;

var engine, world;
var obj;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  options={
    isStatic:true
  }

  obj=Bodies.rectangle(200,100,50,50,options);
  World.add(world, obj);
  console.log(obj);
}

function draw() {
  background(0); 

Engine.update(engine);
  rect(obj.position.x,obj.position.y,50,50); 
  rectMode(CENTER);
  drawSprites();
}