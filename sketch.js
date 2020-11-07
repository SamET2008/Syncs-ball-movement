var ball;
var DB;
var position;
var refer;
function setup(){
    DB = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    position = ball;
    refer = DB.ref("/");
    refer.on("value",readposition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
ball.x = ball.x + x;
 ball.y = ball.y + y;
  refer.update({ 
      x : ball.x,
      y : ball.y
})
}
function readposition(data){
    position=data.val();
    ball.x=position.x;
    ball.y=position.y;
}
