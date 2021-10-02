class Ground
{
  constructor(x,y,w,h){

      options = {
       isStatic:true
     }
 
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  World.add(world, this.body)
    }


show() { 
  var pos = this.body.postion;
  push();
  translate(pos.x,pos.y)
  rectMode(CENTER);
  storke(255);
  fill(127);
  rect(0, 0, this.w, this.h);
  pop();

    }
  }