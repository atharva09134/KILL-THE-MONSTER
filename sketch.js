var hero,heroImage;
var enemy,enemyImage;
var bg,bgImg;

function preload() {
heroImage = loadImage("hero.png")
enemyImage = loadImage("monster.png")
bgImg = loadImage("sky.png")

}

function setup() {
  createCanvas(1535, 720);
  
 hero = new Hero(200,200,5050)
 





}

function draw() {
  background(bgImg);

}

