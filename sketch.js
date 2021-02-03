var cat, catImg1,catImg2,catImg3,catImg4;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var background0,background0Image;
function preload() {
    //load the images here
catImg1 = loadImage("cat1.png");
catImg2 = loadImage("cat2.png");
catImg3 = loadImage("cat3.png");
catImg4 = loadImage("cat4.png");

mouseImg1 = loadImage("mouse1.png");
mouseImg2 = loadImage("mouse2.png");
mouseImg3 = loadImage("mouse3.png");
mouseImg4 = loadImage("mouse4.png");

background0Image = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
background0 = createSprite(500,400);
background0.addImage(background0Image);
cat = createSprite(520,420);
mouse = createSprite(250,240);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here

if(keyCode === LEFT_ARROW){
    cat.veloctiyX = -5;
    cat.addAniimation("catRunning",catImg2);
    cat.changeAnimation("catRunning");
}

}
