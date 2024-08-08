const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var engine,
world,
backgroundImage,
waterSound,
pirateLaughSound,
backgroundMusic,
cannonExplosion

let engine;
let world;

var tower, cannon;

function preload() {
  cannonExplosion = loadSound("./assets/cannon_explosion.mp3")
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}


function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 130, 100, angle);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  //Usa una nueva palabra clave para crear un objeto torre.(desafío 4)
}

function draw() 
{
  background(189);
  image(backgroundImg, 0, 0, width, height);

  Engine.update(engine);
//muestra la torre(desafío 4)
tower.display();
}

