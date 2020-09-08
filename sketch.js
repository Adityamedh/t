const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var gameState = "onSling";
var bg = "bg1.png";
var score  = 0;

function preload(){

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(1150,200,70,70);
    box2 = new Box(1070,200,70,70);

    

    box3 = new Box(990,200,70,70);
    box4 = new Box(910,200,70,70);

    

    box5 = new Box(830,200,70,70);

    box6 = new Box(860,100,70,70);
    
    box7 = new Box(960,100,70,70);

    box8 = new Box(1030,100,70,70);

    box9 = new Box(1110,100,70,70);

    box10  = new Box(1070,40,70,70);

    box11  = new Box(990,40,70,70);

    box12 = new Box(910,40,70,70);

    box13 = new Box(950,0,70,70);

    box14 = new Box(1030,0,70,70);





    platform = new Ground(1000,300,450,10);
    

    bird = new Bird(100,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    noStroke();
    textSize(18);
    fill("white");
    text("score"+score,400,200);
    
    
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    ground.display();
    

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    

    box5.display();
    box5.score();
    box6.display();
    box6.score();
    box7.display();
    box7.score();
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();
    box13.display();
    box13.score();
    box14.display();
    box14.score();

    bird.display();
    

    platform.display();
    
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
    
    }
    async function getBackgroundImg(){
        var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responseJSON = await response.json();
    
        var datetime = responseJSON.datetime;
        var hour = datetime.slice(11,13);
        
        if(hour>=0600 && hour<=1900){
            bg = "sprites/bg1.png";
        }
        else{
            bg = "sprites/bg2.jpg";
        }
    
        backgroundImg = loadImage(bg);
        console.log(backgroundImg);
    }