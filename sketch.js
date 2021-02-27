var canvas,block1,block2,block3,block4;
var music,ball,music1;

function preload(){
    ronakz = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different surfaces

    block1 = createSprite(100,590,200,30);
    block1.shapeColor = "yellow";

    block2 = createSprite(300,590,200,30);
    block2.shapeColor = "green";

    block3 = createSprite(500,590,200,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,590,200,30);
    block4.shapeColor = "blue";

    ball = createSprite(220,100,50,50);
    ball.shapeColor = "white";
    ball.velocityY = 5;
    ball.velocityX = 5;

    //create box sprite and give velocity
    
}

function draw() {
    background("pink");
    //create edgeSprite

    edges= createEdgeSprites();
    ball.bounceOff(edges);

   if(ball.isTouching(block1) && ball.bounceOff(block1)){
       ball.shapeColor = "yellow";
       ronakz.play();  
       ball.velocityX = 0;
         }
   if(ball.isTouching(block2) && ball.bounceOff(block2)){
    ball.shapeColor = "green";
    ronakz.play();  
    ball.velocityX = 0;
    }
    if(ball.isTouching(block3) && ball.bounceOff(block3)){
    ball.shapeColor = "red";
    ronakz.play();  
    ball.velocityX = 0;
    }
    if(ball.isTouching(block4) && ball.bounceOff(block4)){
        ball.shapeColor = "blue";
        ronakz.play();  
        ball.velocityX = 0;
        }
        if(keyDown("space")){
            ronakz.stop();
            ball.velocityX = 5;
        }


    drawSprites();
    //add condition to check if box touching surface and make it box
}
