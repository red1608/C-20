var fixed,moving;
function setup() {
  createCanvas(1200,800);
  fixed= createSprite(400, 200, 100, 60);
  moving = createSprite(800,200,60,100);
  fixed.velocityX=4;
  moving.velocityX=-4;
}

function draw() {
  background(0);  
  fixed.shapeColor="green";
  moving.shapeColor="green";
  

  if (moving.x-fixed.x < moving.width/2+fixed.width/2
     && fixed.x-moving.x < moving.width/2+fixed.width/2 
     &&moving.y-fixed.y < moving.height/2+fixed.height/2 
     && fixed.y-moving.y < moving.height/2+fixed.height/2){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }



  else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  if (moving.x-fixed.x < moving.width/2+fixed.width/2
    && fixed.x-moving.x < moving.width/2+fixed.width/2) {
      fixed.velocityX*=-1
      moving.velocityX*=-1;
    }
    if (moving.y-fixed.y < moving.height/2+fixed.height/2 
      && fixed.y-moving.y < moving.height/2+fixed.height/2){
      fixed.velocityY*=1;
      moving.velocityY*=1;
      }


  drawSprites();
}